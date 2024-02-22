import SearchPopUp from "@/lib-components/SearchPopUp"

export default {
    title: "SEARCH / PopUp",
    component: SearchPopUp,
}

export const Default = () => ({
    data() {
        return {
            routerQueryData: {
                queryText: "",
                queryFilters: {},
            },
        }
    },
    components: { SearchPopUp },
    template: `
    <div style="
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 20px;
    ">
        <search-pop-up
            :search-generic-query="routerQueryData"
            placeholder="FIND ALL THE  LLAMAS THAT TOTALLY RULE"
        />
    </div>
    `,
})

