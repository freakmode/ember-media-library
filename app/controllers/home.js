import Ember from 'ember';

export default Ember.Controller.extend({
	sortProperties: ['totalAlbumsSold:desc'],
	topFiveList: Ember.computed.sort('content', 'sortProperties')
});
