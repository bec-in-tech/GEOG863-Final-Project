// Load required modules
require([
  "esri/WebMap",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Search",
  "esri/widgets/LayerList",
  "esri/widgets/Editor",
  "esri/widgets/Locate",
  "esri/widgets/Home",
  "esri/widgets/Compass",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/widgets/ScaleBar",
], function (
  WebMap,
  MapView,
  FeatureLayer,
  Search,
  LayerList,
  Editor,
  Locate,
  Home,
  Compass,
  Legend,
  Expand,
  ScaleBar
) {
  /* Create a new WebMap object referencing the web map item ID using the created AGOL web map 
    for this project*/
  const webmap = new WebMap({
    portalItem: {
      id: "a11cff67d7fe49069fc800f9ebefd00a",
    },
  });

  // Create a new MapView object and reference the WebMap object
  const view = new MapView({
    container: "viewDiv",
    map: webmap,
  });

  // Wait for the view to be loaded
  view.when(() => {
    // Load all layers in the map and get the point layer
    view.map.loadAll().then(() => {
      let pointLayer;
      view.map.allLayers.forEach((layer) => {
        if (layer.type === "feature" && layer.geometryType === "point") {
          pointLayer = layer;
        }
      });

      // Define layerInfos object for the pointLayer in the Editor widget
      const pointInfos = {
        layer: pointLayer, // Specify the pointLayer to be edited
        formTemplate: {
          // Define the form template for editing
          elements: [
            {
              // Define the field elements included in the form template
              type: "field",
              fieldName: "SPECIES_NAME",
              label: "Species Name",
            },
            {
              type: "field",
              fieldName: "SPECIES_CODE",
              label: "Species Code",
            },
            {
              type: "field",
              fieldName: "COMM_NAME",
              label: "Common Name",
            },
            {
              type: "field",
              fieldName: "SURVEY_DATE",
              label: "Survey Date",
            },
            {
              type: "field",
              fieldName: "SURVEYOR",
              label: "Surveyor",
            },
            {
              type: "field",
              fieldName: "ABUNDANCE",
              label: "Abundance",
            },
            {
              type: "field",
              fieldName: "AGE_CLASS",
              label: "Age Class",
            },
            {
              type: "field",
              fieldName: "PHENOLOGY",
              label: "Phenology",
            },
            {
              type: "field",
              fieldName: "HABITAT",
              label: "Habitat",
            },
            {
              type: "field",
              fieldName: "CRYPTOGRAMS",
              label: "Cryptograms",
            },
            {
              type: "field",
              fieldName: "DISTURBANCE",
              label: "Disturbance",
            },
            {
              type: "field",
              fieldName: "OVERALL_QUALITY",
              label: "Overall Quality",
            },
            {
              type: "field",
              fieldName: "COMMENTS",
              label: "Comments",
            },
          ],
        },
      };

      // Create a new FeatureLayer referencing the web layer portalItem ID
      const plantLayer = new FeatureLayer({
        portalItem: {
          id: "dc6b638ce33643e4b304c3ddf1300be3",
        },
      });

      // Create a new Search widget and reference the MapView
      const searchWidget = new Search({
        view: view,
        allPlaceholder: "Search species name, common name, or code",
        sources: [
          {
            layer: plantLayer, // Define the FeatureLayer to search
            /* Define fields to search within the FeatureLayer*/
            searchFields: ["SPECIES_NAME", "COMM_NAME", "SPECIES_CODE"],
            exactMatch: false,
            /*Define fields to return in the results*/
            outFields: ["SPECIES_NAME", "COMM_NAME", "SPECIES_CODE"],
            name: "Plant Name or Code",
            placeholder: "example: Arctomecon californica",
            zoomScale: 100000,
          },
        ],
        includeDefaultSources: false,
      });

      // Add the search widget to the top-right corner of the map view
      view.ui.add(searchWidget, {
        position: "top-right",
      });

      // Add a LayerList widget to the map view
      const layerList = new LayerList({
        view: view,
      });

      // Add the LayerList widget to the top-right corner of the map view
      view.ui.add(layerList, {
        position: "top-right",
      });

      // Add an Editor widget to the map view
      const editor = new Editor({
        view: view,
        layerInfos: [pointInfos],
      });

      // Add the Editor widget to the top-right corner of the map view
      view.ui.add(editor, {
        position: "top-right",
      });

      // Add a Locate widget to the map view
      const locate = new Locate({
        view: view,
      });

      // Add the Locate widget to the top-left corner of the map view
      view.ui.add(locate, "top-left");

      // Add a Home Button widget to the map view
      const homeButton = new Home({
        view: view,
      });

      // Add the Home Button widget to the top-left corner of the map view
      view.ui.add(homeButton, "top-left");
    });

    // Add a Compass widget to the map view
    const compass = new Compass({
      view: view,
    });

    // Add the Compass widget to the top-left corner of the map view
    view.ui.add(compass, "top-left");
  });

  // Add a Legend widget to the map view
  const legend = new Legend({
    view: view,
  });

  // Add Expand Widget to expand and contract the Legend widget
  const legendExpand = new Expand({
    expandTooltip: "Show Legend",
    expanded: true,
    view: view,
    content: legend,
  });

  // Add the Legend widget to the top-left corner of the map view
  view.ui.add(legendExpand, "top-left");

  // Add a ScaleBar widget to the map view
  const scaleBar = new ScaleBar({
    view: view,
    unit: "dual",
  });

  // Add the ScaleBar widget to the bottom-left corner of the map view
  view.ui.add(scaleBar, "bottom-left");
});
