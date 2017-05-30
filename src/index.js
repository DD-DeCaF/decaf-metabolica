import {AppModule} from 'metabolica';
import {MaintenanceModule} from 'metabolica/src/app/shared/maintenance/maintenance.module';

import {ProjectModule} from 'metabolica-core';
import {PoolsModule} from 'metabolica-core';
import {PlatesModule} from 'metabolica-core';
import {ExperimentsModule} from 'metabolica-core';
import {SettingsModule} from 'metabolica-core';
import {MediaModule} from 'metabolica-core';

import {VariantsModule} from 'metabolica-variants';
import {VizModule} from 'metabolica-viz';
import {PathwaysModule} from 'metabolica-pathways';
import {TheoreticalYieldModule} from 'metabolica-yields';
import {PathwayVisModule} from 'metabolica-map';
import {UploadModule} from 'metabolica-upload';
import {AboutModule} from 'metabolica-about';


export const DecafAppModule = angular.module('DecafApp', [
    AppModule.name,
    MaintenanceModule.name,
    ProjectModule.name,
    PoolsModule.name,
    PlatesModule.name,
    ExperimentsModule.name,
    SettingsModule.name,
    MediaModule.name,
    VariantsModule.name,
    VizModule.name,
    UploadModule.name,
    PathwaysModule.name,
    TheoreticalYieldModule.name,
    PathwayVisModule.name,
    AboutModule.name
]).config(function (appNameProvider, appAuthProvider, potionProvider, decafAPIProvider, modelWSProvider) {
    appNameProvider.name = 'DD-DeCaF';
    appAuthProvider.isRequired = false;
    potionProvider.config({host: 'https://data.dd-decaf.eu', prefix: '/api'});
    decafAPIProvider.host = 'https://api.dd-decaf.eu';
    modelWSProvider.config({host: 'wss://api.dd-decaf.eu', prefix: '/wsmodels'});
});
