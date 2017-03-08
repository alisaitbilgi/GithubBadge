
import {shallow} from "enzyme";
import {Form} from "../../../src/components/Form";
import configStore from "../../../src/store/configStore";
const store = configStore();

const spy = sinon.spy(store, "dispatch");

describe("'Form' component", function() {
  before(function() {
    shallow(Form({username: "ali", dispatch: store.dispatch}));
  });

  it("should call dispatch method exactly once ", function() {
    expect(spy.calledOnce).to.equal(true);
  });
});

