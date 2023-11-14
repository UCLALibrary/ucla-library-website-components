import BlockCampusMap from "@/lib-components/BlockCampusMap";

export default {
    title: "block / Campus Map",
    component: BlockCampusMap,
};

const mock = {
    campusLocationId: "280",
    locationName: "YRL Library",
    buildingAccess:
        "<p>Park at parking structure 2. You cannot park in the roundabout. Powell is the second building in on the quad. Walk straight ahead for about 15 minutes. Wear your walking shoes. Finally when you are there walk up the stairs to the rotunda. You are at the library now.</p>",
};

const Template = (args) => ({
    data() {
        return {
            ...mock,
            ...args,
        };
    },
    components: { BlockCampusMap },
    template: `
    <block-campus-map
      :campus-location-id="campusLocationId"
      :location-name="locationName"
      :building-access="buildingAccess"
    />
  `,
});

export const Default = Template.bind({});

export const NoText = Template.bind({});
NoText.args = {
    buildingAccess: "",
};

export const ShortText = Template.bind({});
ShortText.args = {
    buildingAccess: "<p>Just find it! </p>",
};
