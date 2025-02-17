import { render, screen } from "@testing-library/react";
import Filter from "../Filter";
import userEvent from "@testing-library/user-event";
import { act } from "react";

describe("Filter", () => {
  test("should be able to change value of favourite select", () => {
    render(<Filter filters={{}} setFilters={() => {}} />);
    const select = screen.getByLabelText(/favourite/i);

    expect(select.value).toBe("any");
    userEvent.selectOptions(select, "favoured");
    expect(select.value).toBe("favoured");
    userEvent.selectOptions(select, "not favoured");
    expect(select.value).toBe("not favoured");
  });

  test("should be able to change value of gender select", () => {
    render(<Filter filters={{}} setFilters={() => {}} />);
    const select = screen.getByLabelText(/gender/i);

    expect(select.value).toBe("any");
    userEvent.selectOptions(select, "male");
    userEvent.selectOptions(select, "female");
    expect(select.value).toBe("female");
  });
});
