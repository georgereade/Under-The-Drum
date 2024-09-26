import { fn } from "@storybook/test";
import Contact from "./contact"; // Adjust the path if necessary

export const ActionsData = {
  onFormSubmit: fn(),
  onIconHover: fn(),
};

export default {
  title: "Components/Contact",
  component: Contact,
};

const Template = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Add additional stories if needed
