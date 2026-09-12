/*
Escapes HTML characters in content retrieved from external api

Example: Tom & Jerry's "Great" Adventure

"Great" will break when the whole string is used in an attribute: 

<iframe title="Tom & Jerry's "Great" Adventure" ...>

With this utility, the string gets escaped and is used as:

<iframe title="Tom &amp; Jerry&#039;s &quot;Great&quot; Adventure" ...>
*/

export default function escapeHtml (str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
