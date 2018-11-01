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
      };var element = document.getElementById("38b6583f-fb35-437d-a45c-7207a756ce24");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '38b6583f-fb35-437d-a45c-7207a756ce24' but no matching script tag was found. ")
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
                  var docs_json = {"c20c8a84-7ea0-4c97-b60e-a9e14600d131":{"roots":{"references":[{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"bcc3abe0-ada9-444c-bd9b-db060ad06d10","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d5246a53-6dc3-46b6-ad2b-ab9f397a7310","subtype":"Chart","type":"Plot"},"ticker":{"id":"e96fe75e-0822-4879-9d70-dbd6dbd980ee","type":"CategoricalTicker"}},"id":"f674aa37-207a-42da-a703-52a2b3ecf74d","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[3.75,3.9166666666666665,5.75,4.838709677419355,4.111111111111111,3.8333333333333335,6.6521739130434785,5.741935483870968],"x":[9,14,12,16,13,18,13,16],"y":["Monday","Monday","Wednesday","Wednesday","Thursday","Friday","Sunday","Sunday"]}},"id":"67de9e27-995d-4100-9466-529e0142206d","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"31ed09f9-89de-4488-8ad2-cbdbf60eb4a2","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"f91e4603-0c45-465d-bb03-2e3631cbabba","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b986bff2-d967-4d20-8a82-7a17794c466e","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.0,18.92,17.4,18.333333333333332,17.2],"x":[20,15,18,18,14],"y":["Monday","Tuesday","Tuesday","Wednesday","Friday"]}},"id":"36ef4e47-fc9d-4506-9d47-34d331398e55","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"4fb9da57-0cc1-4049-a570-29d6f4e5ee91","type":"BoxAnnotation"},"plot":{"id":"d5246a53-6dc3-46b6-ad2b-ab9f397a7310","subtype":"Chart","type":"Plot"}},"id":"09b74195-214f-4b3d-92e0-b8ac91846681","type":"BoxZoomTool"},{"attributes":{},"id":"e96fe75e-0822-4879-9d70-dbd6dbd980ee","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"3e0c8352-0909-4008-8049-05bebfc7cc1e","type":"ColumnDataSource"},"glyph":{"id":"0b41822c-a86c-4edb-8628-bfa0cae02480","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"498c545b-9662-4211-a7d2-9c658b5e9a74","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.307692307692308,13.777777777777779,14.121212121212121,13.75,15.933333333333334,13.848484848484848,16.0,13.5625,16.5,16.0],"x":[15,15,16,19,15,16,18,12,15,19],"y":["Monday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"3e0c8352-0909-4008-8049-05bebfc7cc1e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"fc31e22e-a212-4327-b5c3-a27908fa0ea6","type":"ColumnDataSource"},"glyph":{"id":"b387ced8-2be4-4728-81dc-fc964548d821","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4642bd0c-d6fe-45c0-a3a4-cc60f143e09e","type":"GlyphRenderer"},{"attributes":{},"id":"cd22a3cb-9aca-4dac-929d-dd22560bc7f8","type":"BasicTicker"},{"attributes":{"data_source":{"id":"49975082-0e6b-452e-afe1-ba03af0658e0","type":"ColumnDataSource"},"glyph":{"id":"25ed5e17-5b03-4d98-947a-a41b8ca09d5d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3c100f03-db4f-4baf-8c16-01c41e3a8ede","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"8cca7e2a-abb0-459b-8904-11b131f7bc1b","type":"LinearColorMapper"},"formatter":{"id":"4b65310e-a46b-4660-bc56-f3830f65fe55","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"d5246a53-6dc3-46b6-ad2b-ab9f397a7310","subtype":"Chart","type":"Plot"},"ticker":{"id":"a9efdf43-5724-44b9-a150-5c4f89f44fd2","type":"BasicTicker"}},"id":"36a6f5a4-a7ee-4433-b31a-e3fd9872f9db","type":"ColorBar"},{"attributes":{"data_source":{"id":"b053c54e-ee1c-4f7d-86b8-2890652442c6","type":"ColumnDataSource"},"glyph":{"id":"707b3784-3a57-43bf-b7b4-5d20b54c256e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9fdb0dad-0cac-4773-b980-c6caba713a7e","type":"GlyphRenderer"},{"attributes":{},"id":"bcc3abe0-ada9-444c-bd9b-db060ad06d10","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"94e4ce8c-4d43-4e42-97ef-6685aa0c36ae","type":"PanTool"},{"id":"1bca65ff-d1c4-430c-b3f4-388a0234945d","type":"WheelZoomTool"},{"id":"09b74195-214f-4b3d-92e0-b8ac91846681","type":"BoxZoomTool"},{"id":"51a9646d-fad6-486a-9b21-4f32f965e493","type":"SaveTool"},{"id":"6496e366-71e7-41cd-93f8-8c8aec4b49f5","type":"ResetTool"},{"id":"fd6cd991-22ef-4693-9815-74161afa76fe","type":"HelpTool"}]},"id":"3566be52-6d13-4985-bba4-0d7d61137964","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.0,21.5,20.458333333333332,22.375],"x":[18,11,17,18],"y":["Thursday","Friday","Sunday","Sunday"]}},"id":"ebfc4096-c793-4298-a3dd-6e019b84f392","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,2.3333333333333335,1.3478260869565217,0.0,0.0,2.28,0.0,3.25,0.0,1.8461538461538463,0.0,0.0,0.0,2.6666666666666665,0.0,2.0,0.0,0.0,2.0,0.0],"x":[11,12,13,9,11,13,9,10,11,13,9,11,9,13,8,9,12,13,10,11],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"b053c54e-ee1c-4f7d-86b8-2890652442c6","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"8cca7e2a-abb0-459b-8904-11b131f7bc1b","type":"LinearColorMapper"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"4c88a91a-1cfb-4932-8efb-b44229a5c4e1","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a0ce745-2b19-40a2-8e25-0574629231d4","type":"Rect"},{"attributes":{"plot":{"id":"d5246a53-6dc3-46b6-ad2b-ab9f397a7310","subtype":"Chart","type":"Plot"}},"id":"fd6cd991-22ef-4693-9815-74161afa76fe","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b387ced8-2be4-4728-81dc-fc964548d821","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"707b3784-3a57-43bf-b7b4-5d20b54c256e","type":"Rect"},{"attributes":{"plot":{"id":"d5246a53-6dc3-46b6-ad2b-ab9f397a7310","subtype":"Chart","type":"Plot"}},"id":"1bca65ff-d1c4-430c-b3f4-388a0234945d","type":"WheelZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"fc94b7f2-b765-4e4d-a1f6-500c542081be","type":"BasicTickFormatter"},"plot":{"id":"d5246a53-6dc3-46b6-ad2b-ab9f397a7310","subtype":"Chart","type":"Plot"},"ticker":{"id":"cd22a3cb-9aca-4dac-929d-dd22560bc7f8","type":"BasicTicker"}},"id":"e61cd6a5-a26a-4d3f-96fa-dd69c5c84dd3","type":"LinearAxis"},{"attributes":{"child":{"id":"d5246a53-6dc3-46b6-ad2b-ab9f397a7310","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"b9506604-3bbf-429f-a43e-7fdb2820744e","type":"Panel"},{"attributes":{"data_source":{"id":"93565373-fa61-4cee-9897-9e5bd2d58211","type":"ColumnDataSource"},"glyph":{"id":"0a0ce745-2b19-40a2-8e25-0574629231d4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a70c5244-7ccf-45b6-8847-63cc2eeb96a8","type":"GlyphRenderer"},{"attributes":{},"id":"fc94b7f2-b765-4e4d-a1f6-500c542081be","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"67de9e27-995d-4100-9466-529e0142206d","type":"ColumnDataSource"},"glyph":{"id":"b986bff2-d967-4d20-8a82-7a17794c466e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b57bbd1d-5a74-4711-bddb-e845eb93a11c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ebfc4096-c793-4298-a3dd-6e019b84f392","type":"ColumnDataSource"},"glyph":{"id":"962562a0-46ff-4fe4-bf05-26190a4e947e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"12397afb-56b7-4165-aea1-442f5b44d7b8","type":"GlyphRenderer"},{"attributes":{},"id":"a9efdf43-5724-44b9-a150-5c4f89f44fd2","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.08695652173913,12.833333333333334,12.727272727272727,12.636363636363637,10.8,12.56,10.53125,10.5],"x":[17,18,14,16,17,15,16,8],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Thursday","Thursday","Sunday"]}},"id":"5ef7b32f-d38f-495c-92b1-09e6924c3f57","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"b9506604-3bbf-429f-a43e-7fdb2820744e","type":"Panel"}]},"id":"cdb18f95-40e4-4d39-9cf7-b91f509a849a","type":"Tabs"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4fb9da57-0cc1-4049-a570-29d6f4e5ee91","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b41822c-a86c-4edb-8628-bfa0cae02480","type":"Rect"},{"attributes":{"data_source":{"id":"5ef7b32f-d38f-495c-92b1-09e6924c3f57","type":"ColumnDataSource"},"glyph":{"id":"abb05887-82ec-4985-87d8-e5fb7e1a1776","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"60ef2202-4ac9-4979-a9e8-782472279397","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.8,7.121212121212121,9.0,9.411764705882353,9.24,6.923076923076923,9.055555555555555,7.090909090909091,7.461538461538462,6.9,9.4,6.705882352941177,7.928571428571429,7.166666666666667,9.428571428571429],"x":[10,16,10,12,15,17,12,14,12,11,14,17,19,9,20],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"fc31e22e-a212-4327-b5c3-a27908fa0ea6","type":"ColumnDataSource"},{"attributes":{},"id":"f8fc7c5b-50c1-479c-b676-f5dd4f67c61b","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,27.928571428571427,28.25,30.0,30.0],"x":[19,20,14,19,20,10,17,19,20,10,17,20],"y":["Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Friday"]}},"id":"49975082-0e6b-452e-afe1-ba03af0658e0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d5246a53-6dc3-46b6-ad2b-ab9f397a7310","subtype":"Chart","type":"Plot"}},"id":"51a9646d-fad6-486a-9b21-4f32f965e493","type":"SaveTool"},{"attributes":{},"id":"4b65310e-a46b-4660-bc56-f3830f65fe55","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[26.25,24.2],"x":[19,14],"y":["Monday","Sunday"]}},"id":"93565373-fa61-4cee-9897-9e5bd2d58211","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"abb05887-82ec-4985-87d8-e5fb7e1a1776","type":"Rect"},{"attributes":{"plot":{"id":"d5246a53-6dc3-46b6-ad2b-ab9f397a7310","subtype":"Chart","type":"Plot"}},"id":"6496e366-71e7-41cd-93f8-8c8aec4b49f5","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"25ed5e17-5b03-4d98-947a-a41b8ca09d5d","type":"Rect"},{"attributes":{"plot":{"id":"d5246a53-6dc3-46b6-ad2b-ab9f397a7310","subtype":"Chart","type":"Plot"}},"id":"94e4ce8c-4d43-4e42-97ef-6685aa0c36ae","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e61cd6a5-a26a-4d3f-96fa-dd69c5c84dd3","type":"LinearAxis"}],"left":[{"id":"f674aa37-207a-42da-a703-52a2b3ecf74d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"4fb9da57-0cc1-4049-a570-29d6f4e5ee91","type":"BoxAnnotation"},{"id":"3c100f03-db4f-4baf-8c16-01c41e3a8ede","type":"GlyphRenderer"},{"id":"a70c5244-7ccf-45b6-8847-63cc2eeb96a8","type":"GlyphRenderer"},{"id":"12397afb-56b7-4165-aea1-442f5b44d7b8","type":"GlyphRenderer"},{"id":"97da0932-9c2c-4863-a9d0-2bde9fd4ebed","type":"GlyphRenderer"},{"id":"498c545b-9662-4211-a7d2-9c658b5e9a74","type":"GlyphRenderer"},{"id":"60ef2202-4ac9-4979-a9e8-782472279397","type":"GlyphRenderer"},{"id":"4642bd0c-d6fe-45c0-a3a4-cc60f143e09e","type":"GlyphRenderer"},{"id":"b57bbd1d-5a74-4711-bddb-e845eb93a11c","type":"GlyphRenderer"},{"id":"9fdb0dad-0cac-4773-b980-c6caba713a7e","type":"GlyphRenderer"},{"id":"e61cd6a5-a26a-4d3f-96fa-dd69c5c84dd3","type":"LinearAxis"},{"id":"f674aa37-207a-42da-a703-52a2b3ecf74d","type":"CategoricalAxis"},{"id":"36a6f5a4-a7ee-4433-b31a-e3fd9872f9db","type":"ColorBar"}],"right":[{"id":"36a6f5a4-a7ee-4433-b31a-e3fd9872f9db","type":"ColorBar"}],"title":{"id":"4c88a91a-1cfb-4932-8efb-b44229a5c4e1","type":"Title"},"tool_events":{"id":"f8fc7c5b-50c1-479c-b676-f5dd4f67c61b","type":"ToolEvents"},"toolbar":{"id":"3566be52-6d13-4985-bba4-0d7d61137964","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"f91e4603-0c45-465d-bb03-2e3631cbabba","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"3482c7f2-a1b8-43c8-a14c-6e5a87bd0911","type":"FactorRange"}},"id":"d5246a53-6dc3-46b6-ad2b-ab9f397a7310","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"962562a0-46ff-4fe4-bf05-26190a4e947e","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"3482c7f2-a1b8-43c8-a14c-6e5a87bd0911","type":"FactorRange"},{"attributes":{"data_source":{"id":"36ef4e47-fc9d-4506-9d47-34d331398e55","type":"ColumnDataSource"},"glyph":{"id":"31ed09f9-89de-4488-8ad2-cbdbf60eb4a2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"97da0932-9c2c-4863-a9d0-2bde9fd4ebed","type":"GlyphRenderer"}],"root_ids":["cdb18f95-40e4-4d39-9cf7-b91f509a849a"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"c20c8a84-7ea0-4c97-b60e-a9e14600d131","elementid":"38b6583f-fb35-437d-a45c-7207a756ce24","modelid":"cdb18f95-40e4-4d39-9cf7-b91f509a849a"}];
                  
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