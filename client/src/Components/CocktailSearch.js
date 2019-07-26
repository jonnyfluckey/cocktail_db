import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';

const source = {
  title: 'Howdy',
  description: 'A brief description',
  image: 'my image',
  price: 2,
}

function CocktailSearch() {

  const [drinkInfo, setDrinkInfo] = useState({
    isLoading: false,
    results: [],
    value: '',
  })

  const handleResultSelect = (e, { result }) => setDrinkInfo({value: result.title})

  const handleSearchChange = (e, { value }) => {
    setDrinkInfo({ isLoading: true, value})
    

    setTimeout(() => {
      if (drinkInfo.value.length < 1) return setDrinkInfo({isLoading: false, results: [], value: ''})

      const re = new RegExp(_.escapeRegExp(value), 'i')
      const isMatch = ((results) => re.test(results.title))

      setDrinkInfo({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
      
    }, 300)
  }

  return (
    <>
    <Grid>
        <Grid.Column width={6}>
          <Search
            loading={drinkInfo.isLoading}
            onResultSelect={handleResultSelect}
            onSearchChange={_.debounce(handleSearchChange, 500, {
              leading: true,
            })}
            results={drinkInfo.results}
            value={drinkInfo.value}
            // {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(drinkInfo, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(source, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  )


}

export default CocktailSearch