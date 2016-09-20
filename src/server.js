import compression from 'compression';
import DocumentMeta from 'react-document-meta';
import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

import config from './common/config';
import configureStore from './common/store/configureStore';
import { parseMarkdown } from './common/helpers/markdown';

import Root from './common/components/Root';
import Page from './common/components/Page';

const scripts = config[ __DEVELOPMENT__ ? 'development' : 'production' ].scripts
  .map( script => `/${ config.dir.js }/${ script.file.split( '/' ).pop() }` );

const styles = config[ __DEVELOPMENT__ ? 'development' : 'production' ].styles
  .map( style => `/${ config.dir.css }/${ style.split( '/' ).pop() }` );

const app = express();

app.use( compression());

app.use( express.static( path.join( __dirname, '..', config.dir.static )));

if ( __DEVELOPMENT__ ) {
  const webpackConfig = require( '../webpack/dev/client.babel' ).default;
  const compiler = require( 'webpack' )( webpackConfig );

  app.use( require( 'webpack-dev-middleware' )( compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use( require( 'webpack-hot-middleware' )( compiler ));
}

const api = ({ url, ...req }, res, next ) => {
  if ( url.includes( '/api/' )) {
    const [ , pathName ] = url.split( '/api/' );
    const [ type, file ] = pathName.split( '/' );

    switch ( type ) {
      case 'post':
        fs.readFile(
          path.resolve( __dirname, '..', config.dir.posts, `${ file }.md` ),
          ( error, content ) => {
            if ( error ) {
              res.status( error.status ).end();
            }

            res.send( parseMarkdown( content.toString()));
          }
        );

        break;
      default:
        res.status( 404 ).end();
        break;
    }
  } else {
    next();
  }
};

const render = ( req, res ) => {
  const location = {
    host: req.get( 'host' ),
    protocol: req.protocol,
    url: req.url,
  };

  configureStore({ isServer: true, location }).then( store => {
    res.send( `<!DOCTYPE html>${
      renderToStaticMarkup(
        <Page
          app={ renderToString( <Root store={ store } /> )}
          meta={ DocumentMeta.renderAsReact()}
          scripts={ scripts }
          styles={ styles }
        />
      )
    }` );
  }).catch( console.error.bind( console ));
};

app.use( api );
app.use( render );

app.listen( process.env.PORT || 3000 );
