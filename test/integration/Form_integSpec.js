import {mount} from "enzyme";
import {Form} from "../../src/components/Form";
import configStore from "../../src/store/configStore";

const store = configStore();
let wrapper;

describe("Form component", function() {
  before(function() {
    wrapper = mount(Form({username: "ali", dispatch: store.dispatch}));
  });

  it("should update the store with a username", function() {
    wrapper.find(".inputStyle").simulate("change", {target: {value: "ali"}});
    expect(store.getState().get("username")).to.equal("ali");
  });
});
