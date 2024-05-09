// Import the createSchema function from Sanity's schema creator part
import createSchema from 'part:@sanity/base/schema-creator';

// Import default schema types provided by Sanity
import schemaTypes from 'all:part:@sanity/base/schema-type';

import experience from './schemas/experience';
import pageInfo from './schemas/pageInfo';
import project from './schemas/project';
import skill from './schemas/skill';
import social from './schemas/social';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    experience,
    pageInfo,
    project,
    skill,
    social,
  ]),
});
