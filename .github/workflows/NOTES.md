```
 # --- Deploy preview for FORK PRs (requires approval via Environment) ---
  storybook-preview-fork:
    if: github.event_name == 'pull_request' &&
      github.event.pull_request.head.repo.full_name != github.repository
    needs: storybook-build
    runs-on: ubuntu-latest

    # This is the protected environment you created in Settings → Environments
    environment:
      name: netlify-preview
      # Optional: show the URL on the PR after deploy
      url: ${{ steps.netlify.outputs.NETLIFY_URL }}

    permissions:
      contents: write
      pull-requests: write
      issues: write
      statuses: write
      deployments: write

    steps:
      # Show which repo this PR is from and whether it’s a fork
      - name: Context probe
        run: |
          echo "event: ${{ github.event_name }}"
          echo "head repo: ${{ github.event.pull_request.head.repo.full_name }}"
          echo "base repo: ${{ github.repository }}"
          echo "is fork? ${{ github.event.pull_request.head.repo.fork }}"
          echo "actor: ${{ github.actor }}"
          echo "job environment (if set): '${{ github.environment }}'"

      # Show token scopes (works even if it's read-only)
      - name: Token probe (scope + rateLimit)
        env:
          GH_TOKEN: ${{ github.token }}
        shell: bash
        run: |
          set -euo pipefail
          echo "::group::token headers"
          curl -sI https://api.github.com/rate_limit -H "authorization: Bearer $GH_TOKEN" | sed -n '1,20p'
          echo "::endgroup::"
          echo "::group::viewerPermission on this repo"
          curl -s https://api.github.com/repos/${{ github.repository }}/collaborators/${{ github.actor }}/permission \
            -H "authorization: Bearer $GH_TOKEN" | jq .
          echo "::endgroup::"

      # PROOF: Are environment secrets injected? (safe – prints only length)
      - name: Environment secret presence (masked)
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID_STORYBOOK_VUE3X }}
        shell: bash
        run: |
          mask() { if [ -n "$1" ]; then echo "set (len=${#1})"; else echo "EMPTY"; fi; }
          echo "NETLIFY_AUTH_TOKEN is $(mask "${NETLIFY_AUTH_TOKEN:-}")"
          echo "NETLIFY_SITE_ID     is $(mask "${NETLIFY_SITE_ID:-}")"

      - name: Download storybook artifact
        uses: actions/download-artifact@v4
        with:
          name: storybook-static-${{ github.event.pull_request.number }}-${{ github.sha }}
          path: storybook-static

      - name: Deploy to Netlify (preview, fork - gated)
        id: netlify
        uses: nwtgck/actions-netlify@v2
        with:
          production-deploy: false
          deploy-message: https://github.com/${{ github.repository }}/pull/${{ github.event.pull_request.number }}
          alias: deploy-preview-${{ github.event.pull_request.number }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          overwrites-pull-request-comment: true
          publish-dir: "./storybook-static"
          fails-without-credentials: true
          github-deployment-environment: storybook--${{ github.event_name }}-${{ github.event.number }}
        env:
          # These come from the protected Environment, only after approval
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID_STORYBOOK_VUE3X }}
```
