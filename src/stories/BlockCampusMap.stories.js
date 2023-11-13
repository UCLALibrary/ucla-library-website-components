import BlockCampusMap from "@/lib-components/BlockCampusMap";

export default {
    title: "BLOCK / Campus Map",
    component: BlockCampusMap,
};

const Template = (args) => ({
    props: Object.keys(args),
    components: { BlockCampusMap },
    template: `<block-campus-map v-bind="$props" />`,
});

const mock = {
    campusLocationId: "280",
    locationName: "YRL Library",
    buildingAccess:
        "<p>Park at parking structure 2. You cannot park in the roundabout. Powell is the second building in on the quad. Walk straight ahead for about 15 minutes. Wear your walking shoes. Finally when you are there walk up the stairs to the rotunda. You are at the library now.</p>",
};

export const Default = Template.bind({});
Default.args = { ...mock };

export const NoText = Template.bind({});
NoText.args = {
    campusLocationId: mock.campusLocationId,
    locationName: mock.locationName,
};

export const ShortText = Template.bind({});
ShortText.args = {
    ...mock,
    buildingAccess: "<p>Just find it! </p>",
};
