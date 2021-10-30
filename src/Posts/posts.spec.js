import React from "react";
import Posts from "./posts";

describe('Posts component', () => {
    it('should render Posts component', () => {
        const component = render(<Posts />);
        expect(component).toMatchSnapshot();
    })
})