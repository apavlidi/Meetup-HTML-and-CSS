import React from 'react';
import { render } from "@testing-library/react";

import { Landing } from './Landing.js';

describe('Landing', () => {
    it('has a button to show more info', () => {
        const renderResult = render(<Landing />); 
        expect(renderResult.getByText('More info')).toBeInTheDocument();
    });
});