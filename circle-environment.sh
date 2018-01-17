#!/usr/bin/env bash

# Export production or staging environment based on the branch we are building
if [ "${CIRCLE_BRANCH}" == "master" ]; then
else
fi

# Run the provided command with this environment
$@
