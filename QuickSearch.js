import React from 'react'
import QuickSearchitems from './QuickSearchitems';

class QuickSearch extends React.Component {
    render() {
        return (

            <div className="subcontainer">
                <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">

                    <QuickSearchitems />
                    <QuickSearchitems />
                    <QuickSearchitems />
                    <QuickSearchitems />
                    <QuickSearchitems />
                    <QuickSearchitems />
                    
                </div>
            </div>
        )
    }
}

export default QuickSearch;