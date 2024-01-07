# GEOG863 Final Project: Mapping Sensitive Species in Southern Nevada

This code is part of a web mapping project for GEOG863 that utilizes the ArcGIS API for JavaScript. The project involves creating an interactive map with various functionalities for managing and visualizing ecological data related to plant species surveys.

Here's a breakdown of the key components and features:

1. Modules: The project loads several required modules from the ArcGIS API, including modules for handling web maps, map views, feature layers, search functionality, layer lists, editing features, locating the user's position, and various widgets for enhancing the user interface.

2. WebMap and MapView: The code creates a new WebMap object by referencing a specific web map item ID on ArcGIS Online (AGOL). Then, it creates a MapView object associated with this web map, specifying the HTML container where the map will be displayed.

3. Layer Handling: After the map view is loaded, the code fetches all layers in the map. It identifies a point layer (presumably representing plant survey data) among the loaded layers.

4. Editor Widget: The code configures an Editor widget for editing features in the identified point layer. It defines a form template with various field elements such as species name, code, common name, survey date, and other attributes.

5. FeatureLayer: A new FeatureLayer is created, referencing a web layer portal item ID. This layer likely represents plant-related data and is used for searching and displaying information on the map.

6. Search Widget: The project includes a search functionality using the Search widget. It allows users to search for plant species by name or code within the specified FeatureLayer. The widget is configured with placeholder text, search fields, and zoom scale settings.

Overall, the project aims to provide a user-friendly web mapping interface for exploring, editing, and querying ecological data related to sensitive plant species surveys. Users can visualize plant distribution, search for specific species, and edit survey data using the provided widgets and functionalities.
