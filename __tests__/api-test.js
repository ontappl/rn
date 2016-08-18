/* eslint-env node, jest */

jest.unmock('../src/api');

import {
  parseTaps,
} from '../src/api';

const correctResponse = [
  {
    'beer': {
      'id': '2944',
      'name': 'Holba Premium',
      'brewery': 'HOLBA',
      'style': 'Czeski Pils',
      'abv': '5,2',
      'plato': '12',
      'ibu': null,
      'origin': 'cz',
      'color': 'light',
      'untappedUrl': null,
      'untappedScore': '2.98',
      'rateBeerUrl': 'http://www.ratebeer.com/beer/holba-premium-12o/4835/',
      'rateBeerScore': '25',
    },
    'tapName': '1',
    'prices': [
      300,
      500,
      700,
    ],
  },
  {
    'beer': {
      'id': '1622',
      'name': 'Tmavý 12',
      'brewery': 'Zubr',
      'style': 'Dark Lager',
      'abv': '5',
      'plato': '12',
      'ibu': '4',
      'origin': null,
      'color': 'black',
      'untappedUrl': null,
      'untappedScore': null,
      'rateBeerUrl': null,
      'rateBeerScore': null,
    },
    'tapName': '2',
    'prices': [
      400,
      600,
      800,
    ],
  },
];

const pricesAsObjectsResponse = [{
  'beer': {
    'id': '1622',
    'name': 'Tmavý 12',
    'brewery': 'Zubr',
    'style': 'Dark Lager',
    'abv': '5',
    'plato': '12',
    'ibu': '4',
    'origin': null,
    'color': 'black',
    'untappedUrl': null,
    'untappedScore': null,
    'rateBeerUrl': null,
    'rateBeerScore': null,
  },
  'tapName': '2',
  'prices': {
    '0': 400,
    '1': 600,
    '2': 800,
  },
},];

describe('api', () => {
  describe('parse taps response', () => {
    it('should parse correctResponse', () => {
      const parsed = parseTaps(correctResponse);

      expect(parsed).toEqual([
        {
          tapName: '1',
          prices: [300, 500, 700,],
          beer: {
            name: 'Holba Premium',
            style: 'Czeski Pils',
            brewery: 'HOLBA',
            abv: '5,2',
            ibu: null,
          },
        },
        {
          tapName: '2',
          prices: [400, 600, 800,],
          beer: {
            name: 'Tmavý 12',
            style: 'Dark Lager',
            brewery: 'Zubr',
            abv: '5',
            ibu: '4',
          },
        },
      ]);
    });

    it('should parse pricesAsObjectsResponse', () => {
      const parsed = parseTaps(pricesAsObjectsResponse);

      expect(parsed).toEqual([{
        tapName: '2',
        prices: [400, 600, 800,],
        beer: {
          name: 'Tmavý 12',
          style: 'Dark Lager',
          brewery: 'Zubr',
          abv: '5',
          ibu: '4',
        },
      },]);
    });
  });
});
