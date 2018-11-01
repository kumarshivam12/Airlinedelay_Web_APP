document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("865d2dae-20b2-4488-8621-568c5959505f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '865d2dae-20b2-4488-8621-568c5959505f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"a69b2248-1f04-4bd1-8135-e81177551edf":{"roots":{"references":[{"attributes":{"callback":null,"end":23},"id":"c30b4aea-66f2-47a7-b303-885798952679","type":"Range1d"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"877b86d8-2218-4003-8dbf-aed5318f747f","type":"LinearAxis"}],"left":[{"id":"55356a98-3909-43ce-a677-c4c501c3ea5c","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"5cf5a240-0eaf-47a1-b7f3-c79af67134cf","type":"BoxAnnotation"},{"id":"b6749c3f-420c-4cd7-8e5a-9a86c1532b77","type":"GlyphRenderer"},{"id":"c8ad8808-b8f5-48d2-9f3d-800a8312c66c","type":"GlyphRenderer"},{"id":"b8b36a45-ac06-4ab6-b7d2-401c9bee4bd2","type":"GlyphRenderer"},{"id":"f024667d-6c68-4af8-aadb-e4425e02800f","type":"GlyphRenderer"},{"id":"a2bdfa97-78e5-485d-a6a7-f83dc2f41af2","type":"GlyphRenderer"},{"id":"36ea979b-164b-4ac9-aa42-8721a98fb3fc","type":"GlyphRenderer"},{"id":"877b86d8-2218-4003-8dbf-aed5318f747f","type":"LinearAxis"},{"id":"55356a98-3909-43ce-a677-c4c501c3ea5c","type":"CategoricalAxis"},{"id":"fc8bc547-9c28-44a9-829e-4a382957fdca","type":"ColorBar"}],"right":[{"id":"fc8bc547-9c28-44a9-829e-4a382957fdca","type":"ColorBar"}],"title":{"id":"f1cbb659-aa49-4d20-b0ab-238146712619","type":"Title"},"tool_events":{"id":"3179d35c-747f-47ec-bef8-ab80c9c59065","type":"ToolEvents"},"toolbar":{"id":"c8feeaaf-f1f9-4e4e-bf3b-8e982f2d5899","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"c30b4aea-66f2-47a7-b303-885798952679","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"bbe2de3c-f834-4018-8c2f-902b5d61b990","type":"FactorRange"}},"id":"2fc65962-8c44-4adc-bb62-959d820b2ab3","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c1cc9b1-2092-4936-b2d9-0efc7480e91b","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0cedc057-3f58-4381-9c4f-023c3b5e0453","type":"Rect"},{"attributes":{"data_source":{"id":"d95fd054-d364-4093-a65d-f3f59f54dc02","type":"ColumnDataSource"},"glyph":{"id":"0cedc057-3f58-4381-9c4f-023c3b5e0453","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f024667d-6c68-4af8-aadb-e4425e02800f","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"0550a80b-8818-4df0-9989-ced54082060c","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2fc65962-8c44-4adc-bb62-959d820b2ab3","subtype":"Chart","type":"Plot"},"ticker":{"id":"96dba7dd-a7a4-44bb-8fd3-e30525320f4a","type":"CategoricalTicker"}},"id":"55356a98-3909-43ce-a677-c4c501c3ea5c","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"2d8d8a2b-a4e1-4a31-9f76-66472817a1b1","type":"ColumnDataSource"},"glyph":{"id":"c8e91e26-d517-4452-9017-46d7a61c944c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b6749c3f-420c-4cd7-8e5a-9a86c1532b77","type":"GlyphRenderer"},{"attributes":{},"id":"de4416dd-7344-4b23-8d61-2bb56e0400b1","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea1181df-e517-4721-9d23-d351aef88fd4","type":"Rect"},{"attributes":{},"id":"3179d35c-747f-47ec-bef8-ab80c9c59065","type":"ToolEvents"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"63bf511d-67c6-47f1-8ef7-e2e76dd0ebda","type":"LinearAxis"}],"left":[{"id":"42d64e08-2f5d-4509-b02b-51a6de0fe498","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"350f2944-960b-4074-a59b-55a6b9eb8dba","type":"BoxAnnotation"},{"id":"df558af8-4d5f-49a5-9264-2054e2391a20","type":"GlyphRenderer"},{"id":"23c4a055-0d08-4320-a07c-54f5ad032b6b","type":"GlyphRenderer"},{"id":"9c8f1955-b3d6-4f25-9510-5b6799d39a54","type":"GlyphRenderer"},{"id":"9adf91e1-9c99-472e-b04e-38a2bc550874","type":"GlyphRenderer"},{"id":"919d4ef0-6ac2-41a6-90ac-1d3a644d546e","type":"GlyphRenderer"},{"id":"2e5686c5-4944-4397-a05e-88c8ac8bae3d","type":"GlyphRenderer"},{"id":"63bf511d-67c6-47f1-8ef7-e2e76dd0ebda","type":"LinearAxis"},{"id":"42d64e08-2f5d-4509-b02b-51a6de0fe498","type":"CategoricalAxis"},{"id":"6360a2e5-126a-4d9c-923b-d75c0f486e73","type":"ColorBar"}],"right":[{"id":"6360a2e5-126a-4d9c-923b-d75c0f486e73","type":"ColorBar"}],"title":{"id":"e134e7d5-d9cf-407e-bbc9-e6a607379277","type":"Title"},"tool_events":{"id":"de4416dd-7344-4b23-8d61-2bb56e0400b1","type":"ToolEvents"},"toolbar":{"id":"103b8d40-b8e9-487e-8656-73e4b7c3f49c","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"8c012439-5b7f-4376-b6ee-fdf67cf7e98d","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"b721be9a-e3e3-4f8c-8f50-d09b0173d321","type":"FactorRange"}},"id":"81626241-9ca2-4c55-a6dc-61f0e47603e7","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9, 12]","(9, 12]","(9, 12]"],"chart_index":[{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"}],"values":[11.507692307692308,10.586206896551724,10.317460317460318],"x":[17,17,17],"y":["Wednesday","Saturday","Sunday"]}},"id":"d27d7ccd-beb6-4ed2-a742-1cefe98ff9af","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ce853ec9-525a-4efd-87bb-9cf9358b7638","type":"ColumnDataSource"},"glyph":{"id":"b5507687-57ee-4cea-9691-0140522f08c6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c8ad8808-b8f5-48d2-9f3d-800a8312c66c","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"5cf5a240-0eaf-47a1-b7f3-c79af67134cf","type":"BoxAnnotation"},"plot":{"id":"2fc65962-8c44-4adc-bb62-959d820b2ab3","subtype":"Chart","type":"Plot"}},"id":"801d1dad-a426-4686-93f0-a0e49a3f1c54","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(27, 30]"],"chart_index":[{"POS_ARR_DELAY":"(27, 30]"}],"values":[30.0],"x":[16],"y":["Friday"]}},"id":"c3d71501-5ea3-4ed2-a749-f0287b9158f1","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0b1ae1e5-9318-421b-ba5a-924d058b2be9","type":"ColumnDataSource"},"glyph":{"id":"b92c94b9-9d0d-44d7-a08b-896a66b60eaf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"919d4ef0-6ac2-41a6-90ac-1d3a644d546e","type":"GlyphRenderer"},{"attributes":{},"id":"0550a80b-8818-4df0-9989-ced54082060c","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"8c012439-5b7f-4376-b6ee-fdf67cf7e98d","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"350f2944-960b-4074-a59b-55a6b9eb8dba","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"2fc65962-8c44-4adc-bb62-959d820b2ab3","subtype":"Chart","type":"Plot"}},"id":"e89deacc-1198-403e-a516-77c77a7a7bc1","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"65a4e528-cf5c-408d-98de-e2fc72a36fa7","type":"Rect"},{"attributes":{},"id":"96dba7dd-a7a4-44bb-8fd3-e30525320f4a","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d927ca1d-04bc-471a-ba49-d405e6af2082","type":"PanTool"},{"id":"ff678c87-94db-4269-90dd-7d0dbf79e8f2","type":"WheelZoomTool"},{"id":"801d1dad-a426-4686-93f0-a0e49a3f1c54","type":"BoxZoomTool"},{"id":"e89deacc-1198-403e-a516-77c77a7a7bc1","type":"SaveTool"},{"id":"09d887ea-615a-4459-be3d-50153af33d94","type":"ResetTool"},{"id":"c4e857ac-a9ca-41f3-bc72-b391db1ab1cb","type":"HelpTool"}]},"id":"c8feeaaf-f1f9-4e4e-bf3b-8e982f2d5899","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(27, 30]"],"chart_index":[{"POS_ARR_DELAY":"(27, 30]"}],"values":[30.0],"x":[16],"y":["Friday"]}},"id":"2d8d8a2b-a4e1-4a31-9f76-66472817a1b1","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b5507687-57ee-4cea-9691-0140522f08c6","type":"Rect"},{"attributes":{"plot":{"id":"81626241-9ca2-4c55-a6dc-61f0e47603e7","subtype":"Chart","type":"Plot"}},"id":"d171cb54-9b03-49e4-bae7-c8b30d1b27d8","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8e91e26-d517-4452-9017-46d7a61c944c","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[3, 6]","[3, 6]","[3, 6]","[3, 6]","[3, 6]"],"chart_index":[{"POS_ARR_DELAY":"[3, 6]"},{"POS_ARR_DELAY":"[3, 6]"},{"POS_ARR_DELAY":"[3, 6]"},{"POS_ARR_DELAY":"[3, 6]"},{"POS_ARR_DELAY":"[3, 6]"}],"values":[5.555555555555555,3.142857142857143,4.25,4.0,3.0],"x":[16,16,16,16,23],"y":["Tuesday","Wednesday","Saturday","Sunday","Sunday"]}},"id":"b1e12eba-b470-4b35-b9f5-cac5219bed28","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"bbe2de3c-f834-4018-8c2f-902b5d61b990","type":"FactorRange"},{"attributes":{},"id":"7af494d9-2f91-474b-8b4e-3d3b9a57d6b0","type":"CategoricalTicker"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"f1cbb659-aa49-4d20-b0ab-238146712619","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6, 9]","(6, 9]","(6, 9]"],"chart_index":[{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"}],"values":[6.285714285714286,6.21875,7.5],"x":[16,17,17],"y":["Monday","Thursday","Friday"]}},"id":"01fc3567-c002-40c8-80da-b99d1c0da8d9","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"1acd39ef-0070-4c39-b17c-2d075d34e56a","type":"LinearColorMapper"},"formatter":{"id":"0304f5da-8869-4b88-bf07-ba1258809bc8","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"81626241-9ca2-4c55-a6dc-61f0e47603e7","subtype":"Chart","type":"Plot"},"ticker":{"id":"365a8478-c36d-4b14-a0e7-302463f75511","type":"BasicTicker"}},"id":"6360a2e5-126a-4d9c-923b-d75c0f486e73","type":"ColorBar"},{"attributes":{"data_source":{"id":"b1e12eba-b470-4b35-b9f5-cac5219bed28","type":"ColumnDataSource"},"glyph":{"id":"f46afd6e-428a-46b9-b180-6f1f2f03691c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2e5686c5-4944-4397-a05e-88c8ac8bae3d","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"1acd39ef-0070-4c39-b17c-2d075d34e56a","type":"LinearColorMapper"},{"attributes":{},"id":"34b7fa2a-a9d0-487d-88dc-5f6816491c2d","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"01fc3567-c002-40c8-80da-b99d1c0da8d9","type":"ColumnDataSource"},"glyph":{"id":"7c1cc9b1-2092-4936-b2d9-0efc7480e91b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a2bdfa97-78e5-485d-a6a7-f83dc2f41af2","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"379d359d-5cc1-406d-84a4-b44d535e7367","type":"LinearColorMapper"},"formatter":{"id":"749a9640-51f5-454e-ad61-11af5c6c60b1","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"2fc65962-8c44-4adc-bb62-959d820b2ab3","subtype":"Chart","type":"Plot"},"ticker":{"id":"c56af60c-d44e-4faa-8b3e-bd2a2b51c886","type":"BasicTicker"}},"id":"fc8bc547-9c28-44a9-829e-4a382957fdca","type":"ColorBar"},{"attributes":{},"id":"365a8478-c36d-4b14-a0e7-302463f75511","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(24, 27]"],"chart_index":[{"POS_ARR_DELAY":"(24, 27]"}],"values":[24.375],"x":[16],"y":["Thursday"]}},"id":"ce853ec9-525a-4efd-87bb-9cf9358b7638","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"05dc11a9-986a-4927-bf14-3b14b6fce504","type":"BasicTickFormatter"},"plot":{"id":"81626241-9ca2-4c55-a6dc-61f0e47603e7","subtype":"Chart","type":"Plot"},"ticker":{"id":"19abf701-cd75-4539-b79d-3c7758d66e98","type":"BasicTicker"}},"id":"63bf511d-67c6-47f1-8ef7-e2e76dd0ebda","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a9c2dc0-d53c-4c51-affe-ffacb1a723d1","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"20640e31-7637-46fe-96cc-866e5dcd5a09","type":"Rect"},{"attributes":{},"id":"749a9640-51f5-454e-ad61-11af5c6c60b1","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"81626241-9ca2-4c55-a6dc-61f0e47603e7","subtype":"Chart","type":"Plot"}},"id":"e1fdcffd-3674-4b76-bf5b-7eac417b8ca4","type":"ResetTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"e134e7d5-d9cf-407e-bbc9-e6a607379277","type":"Title"},{"attributes":{"data_source":{"id":"d6ec4fc3-44c7-4206-88c6-d6efda33afa9","type":"ColumnDataSource"},"glyph":{"id":"630d40b9-a83e-4b8c-8079-eba6d49c940d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b8b36a45-ac06-4ab6-b7d2-401c9bee4bd2","type":"GlyphRenderer"},{"attributes":{"child":{"id":"81626241-9ca2-4c55-a6dc-61f0e47603e7","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"f33c72f1-6a0b-42a0-8dda-cbd51c29b634","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6, 9]","(6, 9]","(6, 9]"],"chart_index":[{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"}],"values":[6.285714285714286,6.21875,7.5],"x":[16,17,17],"y":["Monday","Thursday","Friday"]}},"id":"0b1ae1e5-9318-421b-ba5a-924d058b2be9","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"2fc65962-8c44-4adc-bb62-959d820b2ab3","subtype":"Chart","type":"Plot"}},"id":"c4e857ac-a9ca-41f3-bc72-b391db1ab1cb","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[3, 6]","[3, 6]","[3, 6]","[3, 6]","[3, 6]"],"chart_index":[{"POS_ARR_DELAY":"[3, 6]"},{"POS_ARR_DELAY":"[3, 6]"},{"POS_ARR_DELAY":"[3, 6]"},{"POS_ARR_DELAY":"[3, 6]"},{"POS_ARR_DELAY":"[3, 6]"}],"values":[5.555555555555555,3.142857142857143,4.25,4.0,3.0],"x":[16,16,16,16,23],"y":["Tuesday","Wednesday","Saturday","Sunday","Sunday"]}},"id":"ee64be17-025b-4f3e-a295-36c104962a5b","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b92c94b9-9d0d-44d7-a08b-896a66b60eaf","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f46afd6e-428a-46b9-b180-6f1f2f03691c","type":"Rect"},{"attributes":{"data_source":{"id":"ff29eda5-3607-40b5-8214-9c70f56c7597","type":"ColumnDataSource"},"glyph":{"id":"20640e31-7637-46fe-96cc-866e5dcd5a09","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9c8f1955-b3d6-4f25-9510-5b6799d39a54","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"81626241-9ca2-4c55-a6dc-61f0e47603e7","subtype":"Chart","type":"Plot"}},"id":"2c89b71b-698a-4e75-9ba5-0ee8f65abbcc","type":"PanTool"},{"attributes":{},"id":"c56af60c-d44e-4faa-8b3e-bd2a2b51c886","type":"BasicTicker"},{"attributes":{},"id":"05dc11a9-986a-4927-bf14-3b14b6fce504","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12, 15]","(12, 15]"],"chart_index":[{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"}],"values":[14.46031746031746,12.875],"x":[17,17],"y":["Monday","Tuesday"]}},"id":"ff29eda5-3607-40b5-8214-9c70f56c7597","type":"ColumnDataSource"},{"attributes":{},"id":"19abf701-cd75-4539-b79d-3c7758d66e98","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d27d7ccd-beb6-4ed2-a742-1cefe98ff9af","type":"ColumnDataSource"},"glyph":{"id":"ea1181df-e517-4721-9d23-d351aef88fd4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9adf91e1-9c99-472e-b04e-38a2bc550874","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c3d71501-5ea3-4ed2-a749-f0287b9158f1","type":"ColumnDataSource"},"glyph":{"id":"65a4e528-cf5c-408d-98de-e2fc72a36fa7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"df558af8-4d5f-49a5-9264-2054e2391a20","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"2fc65962-8c44-4adc-bb62-959d820b2ab3","subtype":"Chart","type":"Plot"}},"id":"ff678c87-94db-4269-90dd-7d0dbf79e8f2","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"2fc65962-8c44-4adc-bb62-959d820b2ab3","subtype":"Chart","type":"Plot"}},"id":"d927ca1d-04bc-471a-ba49-d405e6af2082","type":"PanTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"b721be9a-e3e3-4f8c-8f50-d09b0173d321","type":"FactorRange"},{"attributes":{},"id":"0304f5da-8869-4b88-bf07-ba1258809bc8","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"a780d2c1-7b1c-4f7a-9dbb-4543c96f0b0e","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"81626241-9ca2-4c55-a6dc-61f0e47603e7","subtype":"Chart","type":"Plot"},"ticker":{"id":"7af494d9-2f91-474b-8b4e-3d3b9a57d6b0","type":"CategoricalTicker"}},"id":"42d64e08-2f5d-4509-b02b-51a6de0fe498","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(24, 27]"],"chart_index":[{"POS_ARR_DELAY":"(24, 27]"}],"values":[24.375],"x":[16],"y":["Thursday"]}},"id":"2aac8777-aab1-4cc6-a952-f57be7e59dd9","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2c89b71b-698a-4e75-9ba5-0ee8f65abbcc","type":"PanTool"},{"id":"3925f625-ffad-4128-b3a1-623b9aa7086b","type":"WheelZoomTool"},{"id":"d575cc26-afdc-47d4-acb2-7ed0f6d29cc7","type":"BoxZoomTool"},{"id":"af57a6b2-9be3-4334-9af6-ca162465787c","type":"SaveTool"},{"id":"e1fdcffd-3674-4b76-bf5b-7eac417b8ca4","type":"ResetTool"},{"id":"d171cb54-9b03-49e4-bae7-c8b30d1b27d8","type":"HelpTool"}]},"id":"103b8d40-b8e9-487e-8656-73e4b7c3f49c","type":"Toolbar"},{"attributes":{"plot":{"id":"2fc65962-8c44-4adc-bb62-959d820b2ab3","subtype":"Chart","type":"Plot"}},"id":"09d887ea-615a-4459-be3d-50153af33d94","type":"ResetTool"},{"attributes":{"data_source":{"id":"ee64be17-025b-4f3e-a295-36c104962a5b","type":"ColumnDataSource"},"glyph":{"id":"4a9c2dc0-d53c-4c51-affe-ffacb1a723d1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"36ea979b-164b-4ac9-aa42-8721a98fb3fc","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5cf5a240-0eaf-47a1-b7f3-c79af67134cf","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9, 12]","(9, 12]","(9, 12]"],"chart_index":[{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"}],"values":[11.507692307692308,10.586206896551724,10.317460317460318],"x":[17,17,17],"y":["Wednesday","Saturday","Sunday"]}},"id":"d95fd054-d364-4093-a65d-f3f59f54dc02","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"81626241-9ca2-4c55-a6dc-61f0e47603e7","subtype":"Chart","type":"Plot"}},"id":"3925f625-ffad-4128-b3a1-623b9aa7086b","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"350f2944-960b-4074-a59b-55a6b9eb8dba","type":"BoxAnnotation"},"plot":{"id":"81626241-9ca2-4c55-a6dc-61f0e47603e7","subtype":"Chart","type":"Plot"}},"id":"d575cc26-afdc-47d4-acb2-7ed0f6d29cc7","type":"BoxZoomTool"},{"attributes":{},"id":"a780d2c1-7b1c-4f7a-9dbb-4543c96f0b0e","type":"CategoricalTickFormatter"},{"attributes":{"child":{"id":"2fc65962-8c44-4adc-bb62-959d820b2ab3","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"ca1c0a5a-a457-4b36-803c-9c99ffbf5f4f","type":"Panel"},{"attributes":{"data_source":{"id":"2aac8777-aab1-4cc6-a952-f57be7e59dd9","type":"ColumnDataSource"},"glyph":{"id":"e98166e0-45ac-4d35-8a44-084dd7887d38","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"23c4a055-0d08-4320-a07c-54f5ad032b6b","type":"GlyphRenderer"},{"attributes":{},"id":"c32463ae-75ee-4d99-abc8-e6d6f02036b2","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12, 15]","(12, 15]"],"chart_index":[{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"}],"values":[14.46031746031746,12.875],"x":[17,17],"y":["Monday","Tuesday"]}},"id":"d6ec4fc3-44c7-4206-88c6-d6efda33afa9","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"630d40b9-a83e-4b8c-8079-eba6d49c940d","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"f33c72f1-6a0b-42a0-8dda-cbd51c29b634","type":"Panel"},{"id":"ca1c0a5a-a457-4b36-803c-9c99ffbf5f4f","type":"Panel"}]},"id":"6896240c-8b6a-4455-bae7-623cc9a410a1","type":"Tabs"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"379d359d-5cc1-406d-84a4-b44d535e7367","type":"LinearColorMapper"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"34b7fa2a-a9d0-487d-88dc-5f6816491c2d","type":"BasicTickFormatter"},"plot":{"id":"2fc65962-8c44-4adc-bb62-959d820b2ab3","subtype":"Chart","type":"Plot"},"ticker":{"id":"c32463ae-75ee-4d99-abc8-e6d6f02036b2","type":"BasicTicker"}},"id":"877b86d8-2218-4003-8dbf-aed5318f747f","type":"LinearAxis"},{"attributes":{"plot":{"id":"81626241-9ca2-4c55-a6dc-61f0e47603e7","subtype":"Chart","type":"Plot"}},"id":"af57a6b2-9be3-4334-9af6-ca162465787c","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e98166e0-45ac-4d35-8a44-084dd7887d38","type":"Rect"}],"root_ids":["6896240c-8b6a-4455-bae7-623cc9a410a1"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"a69b2248-1f04-4bd1-8135-e81177551edf","elementid":"865d2dae-20b2-4488-8621-568c5959505f","modelid":"6896240c-8b6a-4455-bae7-623cc9a410a1"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});