import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	name: attr(),
	albums: hasMany('album', { async: true }),
	albumsSold: Ember.computed.mapBy('albums', 'totalSold'),
	totalAlbumsSold: Ember.computed.sum('albumsSold')
});
