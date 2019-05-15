// Test away
const dashboard = require('./Dashboard')
import React from 'react'
import { render } from 'react-testing-library'
import Dashboard from './Dashboard'

describe('Dashboard', () => {
    it('renders dashboard', () => {
        render(<Dashboard />)
    })

    

})