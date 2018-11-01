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
      };var element = document.getElementById("0878d3a4-32dd-4721-a606-9b988e3769aa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0878d3a4-32dd-4721-a606-9b988e3769aa' but no matching script tag was found. ")
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
                  var docs_json = {"73dcc163-0d6e-45d4-ba11-a702ad2b0c93":{"roots":{"references":[{"attributes":{"plot":{"id":"c11b02e6-381a-4d01-a2ca-9aa46b3b07a1","subtype":"Chart","type":"Plot"}},"id":"d7cc5351-e792-46e5-a49b-c88452b96c9e","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c5bafea-dbf9-4c60-88ac-ea7ab3a30853","type":"Rect"},{"attributes":{},"id":"2f0737b8-628f-4a8c-93a6-3ffaf05f398e","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,2.125,1.7142857142857142,2.75,1.0,0.0,1.625,0.0,2.8333333333333335,2.5,0.0,0.0,0.5,2.0,3.0454545454545454,2.2,2.0,1.4444444444444444,0.0,0.0,0.0,0.3333333333333333,1.2,0.0,0.0],"x":[7,15,5,6,7,8,15,5,7,14,15,7,8,14,5,6,8,5,6,9,12,13,15,7,8,10],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"916be26a-ee72-45b3-a010-5e4d37a89322","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4b4db07e-4fef-46f6-9c15-7d8921ef78de","type":"PanTool"},{"id":"6b921037-db49-451e-bd61-05c989c64698","type":"WheelZoomTool"},{"id":"befb32c7-c9e0-4ea9-906d-d31cdb6757a4","type":"BoxZoomTool"},{"id":"71f04fee-d9a5-40b2-838c-ce40a00fe99d","type":"SaveTool"},{"id":"d7cc5351-e792-46e5-a49b-c88452b96c9e","type":"ResetTool"},{"id":"e8f1224f-a264-4fb5-82ca-5f9f4a9b2ef8","type":"HelpTool"}]},"id":"6e36e862-b0e3-4dbe-b324-e944b571ddb6","type":"Toolbar"},{"attributes":{"overlay":{"id":"fded5fe7-fcae-4421-8bf4-8dbe309e0b19","type":"BoxAnnotation"},"plot":{"id":"c11b02e6-381a-4d01-a2ca-9aa46b3b07a1","subtype":"Chart","type":"Plot"}},"id":"befb32c7-c9e0-4ea9-906d-d31cdb6757a4","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"9996047b-7a2f-4b05-a659-17cfb5178bfa","type":"ColumnDataSource"},"glyph":{"id":"c8a2c166-504d-4a77-a6a0-bd21ba93eed5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a220c7d2-2331-4d38-b5bd-1b8bdd26ae5f","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"c1332879-a1d5-4f77-9982-32cdcc8c9b3d","type":"BasicTickFormatter"},"plot":{"id":"c11b02e6-381a-4d01-a2ca-9aa46b3b07a1","subtype":"Chart","type":"Plot"},"ticker":{"id":"d717d7d7-c6bd-43ed-8d29-842cf208dbca","type":"BasicTicker"}},"id":"89b2b350-08f0-401b-b151-977b47cf74d1","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8a2c166-504d-4a77-a6a0-bd21ba93eed5","type":"Rect"},{"attributes":{},"id":"63885ab3-4bd8-4f50-8c45-ec13ecc89570","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"690066bc-4c79-49f9-af66-d836081f43a3","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"36ffe5ca-e9b5-474e-85cb-64453854990b","type":"Rect"},{"attributes":{},"id":"c1332879-a1d5-4f77-9982-32cdcc8c9b3d","type":"BasicTickFormatter"},{"attributes":{},"id":"8ec1fc7b-29be-4e64-9f7f-1a79de285576","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,30.0,29.5,30.0,28.5,30.0],"x":[14,16,18,17,16,17,17,17,14],"y":["Monday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"7874d844-f32f-42fe-9924-b97409927482","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff1e3fea-f912-4d7e-86d2-c4d93bd25acc","type":"Rect"},{"attributes":{"plot":{"id":"c11b02e6-381a-4d01-a2ca-9aa46b3b07a1","subtype":"Chart","type":"Plot"}},"id":"4b4db07e-4fef-46f6-9c15-7d8921ef78de","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.46153846153846,22.833333333333332,23.08695652173913,21.46153846153846],"x":[16,14,16,16],"y":["Monday","Tuesday","Wednesday","Friday"]}},"id":"f5badd7d-4657-4524-ac2a-2604be23651f","type":"ColumnDataSource"},{"attributes":{},"id":"b538e759-fab1-4abd-acc6-f2f24a7c05e6","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.461538461538462,10.333333333333334,11.5,10.5,12.461538461538462],"x":[17,18,7,6,17],"y":["Monday","Wednesday","Friday","Sunday","Sunday"]}},"id":"6f16514b-54ec-49de-ab54-7e6fa642b2a6","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"82da0258-6c3e-4acb-8493-d2ceb1269776","type":"LinearColorMapper"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"2f0737b8-628f-4a8c-93a6-3ffaf05f398e","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"c11b02e6-381a-4d01-a2ca-9aa46b3b07a1","subtype":"Chart","type":"Plot"},"ticker":{"id":"63885ab3-4bd8-4f50-8c45-ec13ecc89570","type":"CategoricalTicker"}},"id":"6c44f0da-6dca-4c2b-af7e-1da8fc7f0cb0","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.166666666666667,6.166666666666667,4.7,6.6,3.875,4.0,5.0,5.136363636363637,3.4761904761904763,5.857142857142857,3.6666666666666665],"x":[5,8,11,18,6,11,5,6,11,11,15],"y":["Monday","Monday","Monday","Monday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Sunday"]}},"id":"4a28b549-29f1-4668-bc40-710853ff919e","type":"ColumnDataSource"},{"attributes":{},"id":"015c3d26-e782-4492-8d6b-9564408ea81f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c11b02e6-381a-4d01-a2ca-9aa46b3b07a1","subtype":"Chart","type":"Plot"}},"id":"71f04fee-d9a5-40b2-838c-ce40a00fe99d","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b116b21d-d741-494a-9ded-af5bb1b1a2dc","type":"Rect"},{"attributes":{"data_source":{"id":"2bea7e52-c4aa-4623-8c04-14c897df1c6b","type":"ColumnDataSource"},"glyph":{"id":"b116b21d-d741-494a-9ded-af5bb1b1a2dc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d4c5f7bc-dd77-4b83-b537-3411f52e77ec","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"916be26a-ee72-45b3-a010-5e4d37a89322","type":"ColumnDataSource"},"glyph":{"id":"690066bc-4c79-49f9-af66-d836081f43a3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ea1019df-8586-4ea9-92a1-35da822029a9","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7874d844-f32f-42fe-9924-b97409927482","type":"ColumnDataSource"},"glyph":{"id":"0616d1e9-08ce-41b8-bd9d-5731966ca7fc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"91d003af-33bb-4924-b857-69a76997ad8e","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"89b2b350-08f0-401b-b151-977b47cf74d1","type":"LinearAxis"}],"left":[{"id":"6c44f0da-6dca-4c2b-af7e-1da8fc7f0cb0","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"fded5fe7-fcae-4421-8bf4-8dbe309e0b19","type":"BoxAnnotation"},{"id":"91d003af-33bb-4924-b857-69a76997ad8e","type":"GlyphRenderer"},{"id":"d6550978-f2aa-4a71-a6b9-f9b8d273f8f5","type":"GlyphRenderer"},{"id":"d4c5f7bc-dd77-4b83-b537-3411f52e77ec","type":"GlyphRenderer"},{"id":"925bbfae-bfb4-4161-a84e-52324bcf5ce5","type":"GlyphRenderer"},{"id":"8be6f7a7-31d8-4e99-bcf4-4c8bb936c4fa","type":"GlyphRenderer"},{"id":"a220c7d2-2331-4d38-b5bd-1b8bdd26ae5f","type":"GlyphRenderer"},{"id":"9fc56572-9349-4683-9c16-47033d508d7d","type":"GlyphRenderer"},{"id":"ea1019df-8586-4ea9-92a1-35da822029a9","type":"GlyphRenderer"},{"id":"89b2b350-08f0-401b-b151-977b47cf74d1","type":"LinearAxis"},{"id":"6c44f0da-6dca-4c2b-af7e-1da8fc7f0cb0","type":"CategoricalAxis"},{"id":"0bdf9a27-0fc5-49cd-92d8-7256813b9a28","type":"ColorBar"}],"right":[{"id":"0bdf9a27-0fc5-49cd-92d8-7256813b9a28","type":"ColorBar"}],"title":{"id":"9860910f-23cb-4907-8550-ddcdac90601c","type":"Title"},"tool_events":{"id":"8ec1fc7b-29be-4e64-9f7f-1a79de285576","type":"ToolEvents"},"toolbar":{"id":"6e36e862-b0e3-4dbe-b324-e944b571ddb6","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"7e4033ed-ecec-4add-9870-eaa043e3bba0","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"ecb960c8-f6ad-403b-a920-5102c902003d","type":"FactorRange"}},"id":"c11b02e6-381a-4d01-a2ca-9aa46b3b07a1","subtype":"Chart","type":"Plot"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"9860910f-23cb-4907-8550-ddcdac90601c","type":"Title"},{"attributes":{"callback":null,"tabs":[{"id":"4670c645-750a-4505-91d6-56b0f902c976","type":"Panel"}]},"id":"fbccb4d7-dc10-4698-abf2-cc3db8083c92","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.11764705882353],"x":[18],"y":["Thursday"]}},"id":"2bea7e52-c4aa-4623-8c04-14c897df1c6b","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"82da0258-6c3e-4acb-8493-d2ceb1269776","type":"LinearColorMapper"},"formatter":{"id":"015c3d26-e782-4492-8d6b-9564408ea81f","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"c11b02e6-381a-4d01-a2ca-9aa46b3b07a1","subtype":"Chart","type":"Plot"},"ticker":{"id":"b538e759-fab1-4abd-acc6-f2f24a7c05e6","type":"BasicTicker"}},"id":"0bdf9a27-0fc5-49cd-92d8-7256813b9a28","type":"ColorBar"},{"attributes":{"callback":null,"end":23},"id":"7e4033ed-ecec-4add-9870-eaa043e3bba0","type":"Range1d"},{"attributes":{"data_source":{"id":"f5badd7d-4657-4524-ac2a-2604be23651f","type":"ColumnDataSource"},"glyph":{"id":"36ffe5ca-e9b5-474e-85cb-64453854990b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d6550978-f2aa-4a71-a6b9-f9b8d273f8f5","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4a28b549-29f1-4668-bc40-710853ff919e","type":"ColumnDataSource"},"glyph":{"id":"ff1e3fea-f912-4d7e-86d2-c4d93bd25acc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9fc56572-9349-4683-9c16-47033d508d7d","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fded5fe7-fcae-4421-8bf4-8dbe309e0b19","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"6f16514b-54ec-49de-ab54-7e6fa642b2a6","type":"ColumnDataSource"},"glyph":{"id":"0cfce5ff-ffc3-42a4-a072-750effd00e72","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8be6f7a7-31d8-4e99-bcf4-4c8bb936c4fa","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"ecb960c8-f6ad-403b-a920-5102c902003d","type":"FactorRange"},{"attributes":{},"id":"d717d7d7-c6bd-43ed-8d29-842cf208dbca","type":"BasicTicker"},{"attributes":{"plot":{"id":"c11b02e6-381a-4d01-a2ca-9aa46b3b07a1","subtype":"Chart","type":"Plot"}},"id":"e8f1224f-a264-4fb5-82ca-5f9f4a9b2ef8","type":"HelpTool"},{"attributes":{"plot":{"id":"c11b02e6-381a-4d01-a2ca-9aa46b3b07a1","subtype":"Chart","type":"Plot"}},"id":"6b921037-db49-451e-bd61-05c989c64698","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0cfce5ff-ffc3-42a4-a072-750effd00e72","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.590909090909092,8.380952380952381,8.166666666666666,8.192307692307692],"x":[6,11,8,7],"y":["Monday","Tuesday","Wednesday","Saturday"]}},"id":"9996047b-7a2f-4b05-a659-17cfb5178bfa","type":"ColumnDataSource"},{"attributes":{"child":{"id":"c11b02e6-381a-4d01-a2ca-9aa46b3b07a1","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"4670c645-750a-4505-91d6-56b0f902c976","type":"Panel"},{"attributes":{"data_source":{"id":"bfdd23e8-d41d-4161-9920-261d01f7e9d4","type":"ColumnDataSource"},"glyph":{"id":"8c5bafea-dbf9-4c60-88ac-ea7ab3a30853","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"925bbfae-bfb4-4161-a84e-52324bcf5ce5","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.0,13.6,15.833333333333334,15.884615384615385,15.958333333333334,15.0],"x":[17,14,18,11,16,18],"y":["Tuesday","Friday","Friday","Sunday","Sunday","Sunday"]}},"id":"bfdd23e8-d41d-4161-9920-261d01f7e9d4","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0616d1e9-08ce-41b8-bd9d-5731966ca7fc","type":"Rect"}],"root_ids":["fbccb4d7-dc10-4698-abf2-cc3db8083c92"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"73dcc163-0d6e-45d4-ba11-a702ad2b0c93","elementid":"0878d3a4-32dd-4721-a606-9b988e3769aa","modelid":"fbccb4d7-dc10-4698-abf2-cc3db8083c92"}];
                  
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