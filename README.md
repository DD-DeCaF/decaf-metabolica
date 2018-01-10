# Getting started

Welcome to our cell factory design and analysis platform! We develop the platform as part of the [DD-DeCaF](http://dd-decaf.eu) project with the goal to put model-guided and data-driven design into practice in industrial biotechnology. The platform will enable the following key technologies:

* Metagenomics-enabled design of novel enzymes and biochemical pathways.
* Omics data-driven design of cell factories for the production of chemicals and proteins.
* Analysis and design of microbial communities relevant to human health, industrial biotechnology and agriculture.

With this interactive web application, we target primarily non-expert users that have a need to analyze omics data and compute strains designs. An advance programming interface is provided for expert users ([API docs](https://docs.dd-decaf.eu/)) enabling them deviate from the default workflows and perform custom analyses.

The platform is currently in __beta__ and tested primarily with Google Chrome. If you'd like to stay up-to-date with new releases, please [subscribe](https://tinyletter.com/dd-decaf) to our quarterly newsletter. We will be eternally grateful for feedback in case you miss features or you encountered a problem (for now please drop us a message at [niso@biosustain.dtu.dk](mailto:niso@biosustain.dtu.dk)).

The following sections provide an overview of what you can currently do on platform. Have fun!

### Login (optional)

You can log in [here](https://app.dd-decaf.eu/login) or by navigating to
the menu in the upper right-hand corner. We support sign-on through a number of social media platforms. Alternatively, you can contact us for an account.

<img src="gifs/login.gif" alt="Login screencast" width="650">

Logging in is optional, (you can browse public domain data and run
simulations) but necessary for uploading your own data.

### Interactive cell factory design and omics data integration

In the [Interactive Map](https://app.dd-decaf.eu/app/pathwayvis) we utilize metabolic pathway maps as an intuitive user interface for model simulation and data analysis, giving biologists the ability to modify models in a visual way instead of writing programming code. For example, reactions can be deleted from the host organism.

<img src="gifs/knockout.gif" alt="Reaction knockout" width="650">

All modifications can be undone (for example the reaction deletion).

<img src="gifs/undo-knockout.gif" alt="Reaction knockout" width="650">

The side panel on the left provides the user with additional information (for example the medium composition) and the ability to select different model simulation methods. The default simulation method, [pFBA](http://cobramethods.wikidot.com/pfba) (_parsimonious flux balance analysis_), will compute a flux distribution that maximizes growth yield and minimizes the cost of enzyme expression simultaneously. Descriptions of the other available methods will follow shortly.

<img src="gifs/side-panel-medium-simulation-methods.gif" alt="Reaction knockout" width="650">

Computationally more extensive methods can be chosen to get uncertainty estimates for the predicted fluxes. For example, pFBA-FVA combines [pFBA](http://cobramethods.wikidot.com/pfba) with [FVA](http://cobramethods.wikidot.com/flux-variability-analysis) (_flux variability analysis_). Uncertain flux are highlighted using transparency.

<img src="gifs/pfba-fva.gif" alt="Reaction knockout" width="650">

The side panel furthermore provides a selection of different pathway maps the user can explore other parts of metabolism for example (amino acid biosynthesis).

<img src="gifs/amino-acids-pathway.gif" alt="Select amino acid biosynthesis map" width="650">

You can search the map by pressing Ctrl-F (Command-F on Mac). _The arrow buttons for cycling through the matches are currently not visible. This will be fixed soon._

<img src="gifs/searching-on-pathway.gif" alt="Select amino acid biosynthesis map" width="650">

Furthermore native and heterologous reactions can be added on the fly which in combination with reaction deletions (see above) facilitates manual strain design.

<img src="gifs/add-reaction.gif" alt="Add pyruvate carboxylase" width="650">

The application furthermore allows the user to analyze and integrate data with models (see below for how to upload data to the platform). 

__TODO: add gif for data-driven card and animation__

### Computational cell factory design

In the [Pathways](https://app.dd-decaf.eu/app/pathways) application you can predict metabolic routes to products that your can host can not natively produce. You can share pathways with the [Interactive Map](https://app.dd-decaf.eu/app/pathwayvis) application for further inspection. 

<img src="gifs/pathways.gif" alt="Predicting heterologous pathways screencast" width="650">

__TODO: update gif once feature is ready__


### Assessing the capabilities of cell factories

The [Theoretical Yield](https://app.dd-decaf.eu/app/yields) application enables you to evaluate your strain performance in the context of the theoretical production and growth limits.

__TODO: update gif once platform fixed__


### Uploading data

If you're not comfortable uploading proprietary data, please get in touch ([niso@biosustain.dtu.dk](mailto:niso@biosustain.dtu.dk)) as our platform can easily be deployed on your own premise.

__TODO: add gifs for data upload__
