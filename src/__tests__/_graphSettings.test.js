
import {setDatasets} from '../components/Graph/graphSettings'

describe('Graph function dataset', () => {

  it('dataset is empty', () => {
     expect(setDatasets([]).charData.datasets[0].data.length).toBe(0)
  });

  it('dataset is not empty', () => {
    const ratings = ['1','2','3','4','5']
    expect(setDatasets(ratings).charData.datasets[0].data.length).toBe(5)
 });

 it('dataset takes in 3 items', () => {
    const ratings = ['1','2','3']
    expect(setDatasets(ratings).charData.datasets[0].data.length).toBe(3)
 });



});