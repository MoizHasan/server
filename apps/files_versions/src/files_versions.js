// CSP config for webpack dynamic chunk loading
// eslint-disable-next-line
__webpack_nonce__ = btoa(OC.requestToken)

// Correct the root of the app for chunk loading
// OC.linkTo matches the apps folders
// eslint-disable-next-line
__webpack_public_path__ = OC.linkTo('files_versions', 'js/dist/')

import './versionmodel'
import './templates'
import './versioncollection'
import './versionstabview'
import './filesplugin'
import './css/versions.css'

window.OCA.Versions = OCA.Versions
