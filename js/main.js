import {createAnnouncement} from './data';

const SIMILAR_OBJECT_COUNT = 10;

const similarObjects = new Array(SIMILAR_OBJECT_COUNT).fill(null).map(() => createAnnouncement());
similarObjects;
