import React from 'react';
import SHOPE_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

export default class shopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOPE_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='shope-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
