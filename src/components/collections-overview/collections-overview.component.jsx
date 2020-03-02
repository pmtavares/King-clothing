import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import {selectCollections} from '../../redux/shop/shop.selector';
import './collections-overview.style.css'


const CollectionsOverview = ({collections}) => {
    return(
        <div className="collections-overview">
           {collections.map(({id, ...otherCollection })=> (
                <PreviewCollection key={id} {...otherCollection} />
            ))
           }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
}) 

export default connect(mapStateToProps)(CollectionsOverview)
