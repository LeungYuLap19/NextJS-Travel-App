import React from 'react'
import Subtitle from './Subtitle'
import ResultsItem from './ResultsItem'

export default function Results({ tab }: { tab: string }) {
  return (
    <div className='discover-results' id='results'>
        <Subtitle title={tab} />

        <div className='results-grid'>
            <ResultsItem />
            <ResultsItem />
            <ResultsItem />
            <ResultsItem />
            <ResultsItem />
            <ResultsItem />

            <ResultsItem />
            <ResultsItem />
            <ResultsItem />
            <ResultsItem />
            <ResultsItem />
            <ResultsItem />
        </div>
    </div>
  )
}
