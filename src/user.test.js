import Login from "./components/User/login";
import { shallow } from "enzyme";
describe('intern-test-cases',()=>{
    const wrapper = shallow(<Login />);
//   test case 1

  test("Should have an name field", () => {
    expect(wrapper.find("#name").length).toEqual(1);
  });
  ///test case 2
  test("Name field should have initial value empty", () => {
    expect(wrapper.find("#name").props().value).toEqual("");
  });
  test("update state of name", () => {
  
    wrapper.find("#name").simulate("change", {
      target: {
        value: "Nouman",
      },
    });
  });

  

})