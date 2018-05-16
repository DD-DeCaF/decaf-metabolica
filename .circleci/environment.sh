#!/usr/bin/env bash

# Copyright 2018 Novo Nordisk Foundation Center for Biosustainability, DTU.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Export production or staging environment based on the branch we are building
if [ "${CIRCLE_BRANCH}" == "master" ]; then
  export ENVIRONMENT=prod
  export TRUSTED_URLS=${TRUSTED_URLS_PROD}
  export POTION_API_HOST=${POTION_API_HOST_PROD}
  export POTION_API_PREFIX=${POTION_API_PREFIX_PROD}
  export DECAF_API=${DECAF_API_PROD}
  export MODEL_API=${MODEL_API_PROD}
  export MODEL_WS_HOST=${MODEL_WS_HOST_PROD}
  export MODEL_WS_PREFIX=${MODEL_WS_PREFIX_PROD}
  export PATHWAYS_API=${PATHWAYS_API_PROD}
  export PATHWAYS_WS=${PATHWAYS_WS_PROD}
  export SENTRY_DSN=${SENTRY_DSN_PROD}
  export GA_TRACKING_CODE=${GA_TRACKING_CODE_PROD}
else
  export ENVIRONMENT=staging
  export TRUSTED_URLS=${TRUSTED_URLS_STAGING}
  export POTION_API_HOST=${POTION_API_HOST_STAGING}
  export POTION_API_PREFIX=${POTION_API_PREFIX_STAGING}
  export DECAF_API=${DECAF_API_STAGING}
  export MODEL_API=${MODEL_API_STAGING}
  export MODEL_WS_HOST=${MODEL_WS_HOST_STAGING}
  export MODEL_WS_PREFIX=${MODEL_WS_PREFIX_STAGING}
  export PATHWAYS_API=${PATHWAYS_API_STAGING}
  export PATHWAYS_WS=${PATHWAYS_WS_STAGING}
  export SENTRY_DSN=${SENTRY_DSN_STAGING}
  export GA_TRACKING_CODE=${GA_TRACKING_CODE_STAGING}
fi

# Run the provided command with this environment
$@
