# GEOG863 Final Project: Mapping Sensitive Species in Southern Nevada

<b>Project Description: Sensitive Species Map of Southern Nevada's Flora</b><br>

This provided code is part of a web mapping project for GEOG863 that utilizes the ArcGIS API for JavaScript. The project involves creating an interactive map with various functionalities for managing and visualizing ecological data related to sensitive plant species surveys in southern Nevada.

<b>Here's a breakdown of the key components and features:</b>

<b>1. Modules:</b> The project loads several required modules from the ArcGIS API, including modules for handling web maps, map views, feature layers, search functionality, layer lists, editing features, locating the user's position, and various widgets for enhancing the user interface.

<b>2. WebMap and MapView:</b> The code creates a new WebMap object by referencing a specific web map item ID on ArcGIS Online (AGOL). Then, it creates a MapView object associated with this web map, specifying the HTML container where the map will be displayed.

<b>3. Layer Handling:</b> After the map view is loaded, the code fetches all layers in the map. It identifies a point layer (presumably representing plant survey data) among the loaded layers.

<b>4. Editor Widget:</b> The code configures an Editor widget for editing features in the identified point layer. It defines a form template with various field elements such as species name, code, common name, survey date, and other attributes.

<b>5. FeatureLayer:</b> A new FeatureLayer is created, referencing a web layer portal item ID. This layer likely represents plant-related data and is used for searching and displaying information on the map.

<b>6. Search Widget:</b> The project includes a search functionality using the Search widget. It allows users to search for plant species by name or code within the specified FeatureLayer. The widget is configured with placeholder text, search fields, and zoom scale settings.

Overall, the project aims to provide a user-friendly web mapping interface for exploring, editing, and querying ecological data related to sensitive plant species surveys. Users can visualize plant distribution, search for specific species, and edit survey data using the provided widgets and functionalities.

![image](https://github.com/bec-in-tech/GEOG863-Final-Project/assets/120440399/dea9bacd-73c8-41c8-a9da-ceeae2facc52)

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="rNqmPWR" data-user="rmu5072" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rmu5072/pen/rNqmPWR">
  GEOG 863 - Final Project</a> by Rebecca U (<a href="https://codepen.io/rmu5072">@rmu5072</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
