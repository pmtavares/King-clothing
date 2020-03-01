import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollections} from '../../redux/shop/shop.selector';

const ShopPage = ({collections}) => {

    return (
        <div className='shop-page'>
        {
            collections.map(({id, ...otherCollection })=> (
                <PreviewCollection key={id} {...otherCollection} />
            ))
        }
        </div>
        
    );
    

}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);