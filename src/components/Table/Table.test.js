import React from "react";
import Table from "./Table";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Table Component", () => {
  let props;

  beforeEach(() => {
    props = {
      data: {
        page: 1,
        per_page: 6,
        total: 1,
        total_pages: 1,
        data: [
          {
            id: 1,
            email: "byron.fields@reqres.in",
            first_name: "Byron",
            last_name: "Fields",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
          },
        ],
        ad: {
          company: "StatusCode Weekly",
          url: "http://statuscode.org/",
          text: "demo text.",
        },
      },
      loading: false,
      error: null,
    };
  });

  it("renders with data", () => {
    const tree = renderer.create(<Table userObj={props} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
