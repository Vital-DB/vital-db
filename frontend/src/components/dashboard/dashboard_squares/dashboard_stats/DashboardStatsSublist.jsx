import React, {Component} from 'react'

class DashboardStatsSublist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subDataKeys: ["All"],
        }
        this.handleClickSub = this.handleClickSub.bind(this);
    }

    handleClickSub(e){
        let subDataKeys = this.state.subDataKeys;
        let target = e.currentTarget;
        let dataKey = target.getAttribute('value');
        let selectedSubs = [];

        if (dataKey === 'All'){
            target.classList.add('selected-sub');
            let allSubs = target.parentNode.children;
            for(let i = 0; i < allSubs.length; i++){
                debugger
                let currentSub = allSubs[i];
                selectedSubs.push(currentSub.getAttribute('value'));
                if (i !== 0) currentSub.classList.remove('selected-sub');
            }
        } else {
            let allDataKey = target.parentNode.children[0];
            if (subDataKeys[0] === "All" || (allDataKey.getAttribute('value') === 'All') && allDataKey.classList.contains('selected-sub') ) {
                subDataKeys = [];
                allDataKey.classList.remove('selected-sub');
            }

            if (subDataKeys.includes(dataKey) && !subDataKeys.includes('All')){
                target.classList.remove('selected-sub');
                const removedIdx = subDataKeys.indexOf(dataKey);
                const first = subDataKeys.slice(0, removedIdx);
                const last = subDataKeys.slice(removedIdx+1);

                selectedSubs = first.concat(last);
            } else {
                selectedSubs.pop();
                target.classList.add('selected-sub');
                subDataKeys.push(dataKey);
                selectedSubs = subDataKeys;
            }
        }        
        this.setState({subDataKeys: selectedSubs})
    }
    
    render() {
        const {subVitals} = this.props;
        return (
            <ul className="dashboard-stats-sublist">
                    <li value="All" className="selected-sub" onClick={this.handleClickSub}>All</li>
                    {subVitals.map((subVital, idx) => <li key={idx} value={subVital} onClick={this.handleClickSub}>{subVital}</li>)}
            </ul>
        )
    }
}

export default DashboardStatsSublist;