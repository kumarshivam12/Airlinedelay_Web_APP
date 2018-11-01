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
      };var element = document.getElementById("b175e8ba-b33a-40aa-a696-f2fafd203648");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b175e8ba-b33a-40aa-a696-f2fafd203648' but no matching script tag was found. ")
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
                  var docs_json = {"de5c9600-e3e8-47a5-93c9-f6ea84c827b1":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ada12dec-67d7-4529-a99c-311433704572","type":"Rect"},{"attributes":{"child":{"id":"dbdf360c-bd4d-4150-b013-a23fd0127df0","subtype":"Chart","type":"Plot"},"title":"B6"},"id":"36a7110b-7b10-42c4-8951-605980251a9e","type":"Panel"},{"attributes":{"plot":{"id":"dbdf360c-bd4d-4150-b013-a23fd0127df0","subtype":"Chart","type":"Plot"}},"id":"6f8eb431-90ba-4dc8-a00d-3b62f776d591","type":"PanTool"},{"attributes":{"data_source":{"id":"aa84da67-5ec5-483a-ae4a-ad973cebf5f5","type":"ColumnDataSource"},"glyph":{"id":"ee392b60-bdc4-448d-ba6c-322578b86d87","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"91348b03-10a9-4e5d-be89-7ebb29d74c54","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a987fe33-bd64-46b7-bdaf-68cadbd5225f","type":"Rect"},{"attributes":{},"id":"f0062bcc-17c5-40c2-9c98-b32cca2b21a0","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d2b918db-4239-4f48-a334-589f6417493c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"d3f14eca-873c-4f9f-9b61-8273d43d69a0","subtype":"Chart","type":"Plot"}},"id":"a41551c2-38af-4a60-8abf-a4e85b2719ca","type":"ResetTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"7c3d7ea1-d11d-4296-978f-6ac3364be05c","type":"FactorRange"},{"attributes":{"color_mapper":{"id":"d6cfebd8-d160-4972-8c30-2480af0e0acb","type":"LinearColorMapper"},"formatter":{"id":"f0062bcc-17c5-40c2-9c98-b32cca2b21a0","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"d3f14eca-873c-4f9f-9b61-8273d43d69a0","subtype":"Chart","type":"Plot"},"ticker":{"id":"9a720b66-ddfc-47fd-82f3-9c9d47abde5d","type":"BasicTicker"}},"id":"b3edc385-cfbd-425c-8c69-506d782185a0","type":"ColorBar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6f8eb431-90ba-4dc8-a00d-3b62f776d591","type":"PanTool"},{"id":"876b6ad2-93d8-44d8-98d7-300466f70b24","type":"WheelZoomTool"},{"id":"1fb0ce45-8663-40d0-870b-dfb4f4da14b3","type":"BoxZoomTool"},{"id":"06cdc976-4450-4ff7-ac37-391d31919878","type":"SaveTool"},{"id":"0146c29a-f134-47ff-abfa-25802c6606e1","type":"ResetTool"},{"id":"e81cc5d6-d1e2-4309-8134-3a89b39eadda","type":"HelpTool"}]},"id":"7b10284e-0cb4-40de-87b3-bf87eea7b346","type":"Toolbar"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"b0d665a9-5ad1-4920-93c2-1c090d88b7fa","type":"Title"},{"attributes":{"data_source":{"id":"6cdcd5c8-a3cc-4772-bc50-d9bacdcf8f9c","type":"ColumnDataSource"},"glyph":{"id":"ab39391d-8f4b-4937-9a0e-ffaa4cd9cb88","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6a30776c-06e3-4bfb-9b7a-c2a1138a52ea","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d3f14eca-873c-4f9f-9b61-8273d43d69a0","subtype":"Chart","type":"Plot"}},"id":"36253360-252d-40d3-aeb5-6574d6f9fe77","type":"SaveTool"},{"attributes":{},"id":"bdfe947f-f4c1-49b8-92bc-bf1089d79878","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"ddb62efd-572e-4ff1-878c-cdfa984346b9","type":"ColumnDataSource"},"glyph":{"id":"a987fe33-bd64-46b7-bdaf-68cadbd5225f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"52231ddd-af4a-433c-bc90-e4f910f08099","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2f84cfaa-5e37-453e-8bc4-8335f37fa126","type":"ColumnDataSource"},"glyph":{"id":"8595be13-1e10-49ae-87d2-51a7f249b9e5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ec2183e3-caf1-458b-ad8f-fd74559e9e4c","type":"GlyphRenderer"},{"attributes":{},"id":"3d319190-26a1-4ffa-abca-0b0098c15d07","type":"BasicTicker"},{"attributes":{},"id":"76ea04bc-2d0c-4a05-8038-c0b2933c619f","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"b47e84da-7add-4255-8346-b6882b5f5639","type":"ColumnDataSource"},"glyph":{"id":"b3972ae6-141c-421c-be23-c09ae928cbc9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c31f6495-f4de-48cd-877e-127f3b2bd6cc","type":"GlyphRenderer"},{"attributes":{},"id":"1f6990f3-050a-4b2a-b29b-6ebb490b66a6","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"3259dab6-973b-47be-afd4-7cb79c697714","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"dbdf360c-bd4d-4150-b013-a23fd0127df0","subtype":"Chart","type":"Plot"},"ticker":{"id":"33928be4-0268-498f-81e6-606328277659","type":"CategoricalTicker"}},"id":"fda8ce52-931a-46a9-b6b5-2a5acac5c043","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"dbdfc82e-8156-4c84-9f9a-3bcf8ec19025","type":"ColumnDataSource"},"glyph":{"id":"05be07a0-673f-4fa3-91b7-a17364d40676","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"64aefc28-5ebb-4be1-afe8-a2b9d2728062","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"2eaf0332-5b50-4a21-835d-0d47ab67609b","type":"LinearAxis"}],"left":[{"id":"f90e669d-935c-4730-a841-30afe5e4dfcc","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"86ce6da6-e67b-4292-a2e1-f6f44726ba50","type":"BoxAnnotation"},{"id":"ec2183e3-caf1-458b-ad8f-fd74559e9e4c","type":"GlyphRenderer"},{"id":"c31f6495-f4de-48cd-877e-127f3b2bd6cc","type":"GlyphRenderer"},{"id":"64aefc28-5ebb-4be1-afe8-a2b9d2728062","type":"GlyphRenderer"},{"id":"be8bee0d-7b5a-49fb-94b8-ef825027f9d9","type":"GlyphRenderer"},{"id":"185d806a-6f4a-4519-ae88-f0a0af659acd","type":"GlyphRenderer"},{"id":"2eaf0332-5b50-4a21-835d-0d47ab67609b","type":"LinearAxis"},{"id":"f90e669d-935c-4730-a841-30afe5e4dfcc","type":"CategoricalAxis"},{"id":"b3edc385-cfbd-425c-8c69-506d782185a0","type":"ColorBar"}],"right":[{"id":"b3edc385-cfbd-425c-8c69-506d782185a0","type":"ColorBar"}],"title":{"id":"b0d665a9-5ad1-4920-93c2-1c090d88b7fa","type":"Title"},"tool_events":{"id":"92f73467-2f57-46d6-8c7b-ac78c44aae11","type":"ToolEvents"},"toolbar":{"id":"e6cd1ae6-ffcd-4a14-ab04-0554d99d660e","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"5894f838-6395-49d2-866a-f4ea16611f73","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"78ff541a-6650-4e96-951a-e424a1fcb10e","type":"FactorRange"}},"id":"d3f14eca-873c-4f9f-9b61-8273d43d69a0","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"d51aabb1-b6f0-4593-a850-f88d118adb79","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 10.5]","(10, 10.5]"],"chart_index":[{"POS_ARR_DELAY":"(10, 10.5]"},{"POS_ARR_DELAY":"(10, 10.5]"}],"values":[10.477419354838709,9.987012987012987],"x":[8,8],"y":["Tuesday","Wednesday"]}},"id":"6cdcd5c8-a3cc-4772-bc50-d9bacdcf8f9c","type":"ColumnDataSource"},{"attributes":{"child":{"id":"d3f14eca-873c-4f9f-9b61-8273d43d69a0","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"0e79dfe1-4a4f-4caf-939a-c8d122f18803","type":"Panel"},{"attributes":{},"id":"015d6c76-0a57-4f11-ac64-2c28b04b2742","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"86ce6da6-e67b-4292-a2e1-f6f44726ba50","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 10.5]","(10, 10.5]"],"chart_index":[{"POS_ARR_DELAY":"(10, 10.5]"},{"POS_ARR_DELAY":"(10, 10.5]"}],"values":[10.477419354838709,9.987012987012987],"x":[8,8],"y":["Tuesday","Wednesday"]}},"id":"2f84cfaa-5e37-453e-8bc4-8335f37fa126","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b3972ae6-141c-421c-be23-c09ae928cbc9","type":"Rect"},{"attributes":{"plot":{"id":"dbdf360c-bd4d-4150-b013-a23fd0127df0","subtype":"Chart","type":"Plot"}},"id":"e81cc5d6-d1e2-4309-8134-3a89b39eadda","type":"HelpTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"599d2749-63d3-476b-8d8c-e132c92f90a7","type":"LinearAxis"}],"left":[{"id":"fda8ce52-931a-46a9-b6b5-2a5acac5c043","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"d2b918db-4239-4f48-a334-589f6417493c","type":"BoxAnnotation"},{"id":"6a30776c-06e3-4bfb-9b7a-c2a1138a52ea","type":"GlyphRenderer"},{"id":"20a88730-83e2-4c7b-8bc8-71742d9cd338","type":"GlyphRenderer"},{"id":"52231ddd-af4a-433c-bc90-e4f910f08099","type":"GlyphRenderer"},{"id":"91348b03-10a9-4e5d-be89-7ebb29d74c54","type":"GlyphRenderer"},{"id":"2d9cb05d-d1a4-49d2-86f5-181075af425c","type":"GlyphRenderer"},{"id":"599d2749-63d3-476b-8d8c-e132c92f90a7","type":"LinearAxis"},{"id":"fda8ce52-931a-46a9-b6b5-2a5acac5c043","type":"CategoricalAxis"},{"id":"ca5262a5-4bc9-49d8-a5fe-e1ea102cb94e","type":"ColorBar"}],"right":[{"id":"ca5262a5-4bc9-49d8-a5fe-e1ea102cb94e","type":"ColorBar"}],"title":{"id":"a940270c-539e-4017-944f-b3469c4841f9","type":"Title"},"tool_events":{"id":"5b960ff3-cf9b-4611-a128-50a586ff2dfa","type":"ToolEvents"},"toolbar":{"id":"7b10284e-0cb4-40de-87b3-bf87eea7b346","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"23e9666d-a46e-4c31-873a-9b6701ab7ecb","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"7c3d7ea1-d11d-4296-978f-6ac3364be05c","type":"FactorRange"}},"id":"dbdf360c-bd4d-4150-b013-a23fd0127df0","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab39391d-8f4b-4937-9a0e-ffaa4cd9cb88","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"bdfe947f-f4c1-49b8-92bc-bf1089d79878","type":"BasicTickFormatter"},"plot":{"id":"dbdf360c-bd4d-4150-b013-a23fd0127df0","subtype":"Chart","type":"Plot"},"ticker":{"id":"3d319190-26a1-4ffa-abca-0b0098c15d07","type":"BasicTicker"}},"id":"599d2749-63d3-476b-8d8c-e132c92f90a7","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea8a1532-a00b-4d5e-92df-f8e9c3fe099e","type":"Rect"},{"attributes":{"plot":{"id":"dbdf360c-bd4d-4150-b013-a23fd0127df0","subtype":"Chart","type":"Plot"}},"id":"06cdc976-4450-4ff7-ac37-391d31919878","type":"SaveTool"},{"attributes":{"callback":null,"end":23},"id":"23e9666d-a46e-4c31-873a-9b6701ab7ecb","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[5.9, 6.4]"],"chart_index":[{"POS_ARR_DELAY":"[5.9, 6.4]"}],"values":[5.935064935064935],"x":[8],"y":["Thursday"]}},"id":"f0e6d872-7266-4b60-94a3-cee0d4884439","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8, 8.5]"],"chart_index":[{"POS_ARR_DELAY":"(8, 8.5]"}],"values":[8.215686274509803],"x":[8],"y":["Sunday"]}},"id":"dbdfc82e-8156-4c84-9f9a-3bcf8ec19025","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"5894f838-6395-49d2-866a-f4ea16611f73","type":"Range1d"},{"attributes":{"overlay":{"id":"d2b918db-4239-4f48-a334-589f6417493c","type":"BoxAnnotation"},"plot":{"id":"dbdf360c-bd4d-4150-b013-a23fd0127df0","subtype":"Chart","type":"Plot"}},"id":"1fb0ce45-8663-40d0-870b-dfb4f4da14b3","type":"BoxZoomTool"},{"attributes":{"color_mapper":{"id":"b4eec242-ede1-4480-bb1f-ed9095afd350","type":"LinearColorMapper"},"formatter":{"id":"704127c1-69cb-4a54-a48f-5ab45ef7fb7d","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"dbdf360c-bd4d-4150-b013-a23fd0127df0","subtype":"Chart","type":"Plot"},"ticker":{"id":"d51aabb1-b6f0-4593-a850-f88d118adb79","type":"BasicTicker"}},"id":"ca5262a5-4bc9-49d8-a5fe-e1ea102cb94e","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.5, 9]"],"chart_index":[{"POS_ARR_DELAY":"(8.5, 9]"}],"values":[8.929032258064517],"x":[8],"y":["Monday"]}},"id":"b47e84da-7add-4255-8346-b6882b5f5639","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"d6cfebd8-d160-4972-8c30-2480af0e0acb","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"19ab7fb5-78d5-428c-b0e0-d93bf4c609db","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"1f6990f3-050a-4b2a-b29b-6ebb490b66a6","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d3f14eca-873c-4f9f-9b61-8273d43d69a0","subtype":"Chart","type":"Plot"},"ticker":{"id":"76ea04bc-2d0c-4a05-8038-c0b2933c619f","type":"CategoricalTicker"}},"id":"f90e669d-935c-4730-a841-30afe5e4dfcc","type":"CategoricalAxis"},{"attributes":{"callback":null,"tabs":[{"id":"0e79dfe1-4a4f-4caf-939a-c8d122f18803","type":"Panel"},{"id":"36a7110b-7b10-42c4-8951-605980251a9e","type":"Panel"}]},"id":"25d11881-b30f-48a9-b3e8-4e1694e3ded2","type":"Tabs"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee392b60-bdc4-448d-ba6c-322578b86d87","type":"Rect"},{"attributes":{"plot":null,"text":"JetBlue Airways"},"id":"a940270c-539e-4017-944f-b3469c4841f9","type":"Title"},{"attributes":{"overlay":{"id":"86ce6da6-e67b-4292-a2e1-f6f44726ba50","type":"BoxAnnotation"},"plot":{"id":"d3f14eca-873c-4f9f-9b61-8273d43d69a0","subtype":"Chart","type":"Plot"}},"id":"1fd58978-a5b6-499d-beee-e8d39555e506","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[5.9, 6.4]"],"chart_index":[{"POS_ARR_DELAY":"[5.9, 6.4]"}],"values":[5.935064935064935],"x":[8],"y":["Thursday"]}},"id":"12b3bbb6-9216-4921-b489-5067136d1fe4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.4, 6.9]","(6.4, 6.9]"],"chart_index":[{"POS_ARR_DELAY":"(6.4, 6.9]"},{"POS_ARR_DELAY":"(6.4, 6.9]"}],"values":[6.62987012987013,6.633986928104576],"x":[8,8],"y":["Friday","Saturday"]}},"id":"aa84da67-5ec5-483a-ae4a-ad973cebf5f5","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"de29df75-cae8-4b9b-ba36-d1dd156d39ab","type":"PanTool"},{"id":"4519201f-9fad-4272-ac00-9738814e04c5","type":"WheelZoomTool"},{"id":"1fd58978-a5b6-499d-beee-e8d39555e506","type":"BoxZoomTool"},{"id":"36253360-252d-40d3-aeb5-6574d6f9fe77","type":"SaveTool"},{"id":"a41551c2-38af-4a60-8abf-a4e85b2719ca","type":"ResetTool"},{"id":"ada4571e-088a-4c71-94c3-fd0d965d48a3","type":"HelpTool"}]},"id":"e6cd1ae6-ffcd-4a14-ab04-0554d99d660e","type":"Toolbar"},{"attributes":{"data_source":{"id":"9087124a-becf-48a4-bb95-2905c2360b5e","type":"ColumnDataSource"},"glyph":{"id":"ada12dec-67d7-4529-a99c-311433704572","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"be8bee0d-7b5a-49fb-94b8-ef825027f9d9","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8d7972d-ca45-4993-ab82-7d9b21389f50","type":"Rect"},{"attributes":{},"id":"3259dab6-973b-47be-afd4-7cb79c697714","type":"CategoricalTickFormatter"},{"attributes":{},"id":"5b960ff3-cf9b-4611-a128-50a586ff2dfa","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8, 8.5]"],"chart_index":[{"POS_ARR_DELAY":"(8, 8.5]"}],"values":[8.215686274509803],"x":[8],"y":["Sunday"]}},"id":"ddb62efd-572e-4ff1-878c-cdfa984346b9","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"78ff541a-6650-4e96-951a-e424a1fcb10e","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.4, 6.9]","(6.4, 6.9]"],"chart_index":[{"POS_ARR_DELAY":"(6.4, 6.9]"},{"POS_ARR_DELAY":"(6.4, 6.9]"}],"values":[6.62987012987013,6.633986928104576],"x":[8,8],"y":["Friday","Saturday"]}},"id":"9087124a-becf-48a4-bb95-2905c2360b5e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f0e6d872-7266-4b60-94a3-cee0d4884439","type":"ColumnDataSource"},"glyph":{"id":"a8d7972d-ca45-4993-ab82-7d9b21389f50","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"185d806a-6f4a-4519-ae88-f0a0af659acd","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"dbdf360c-bd4d-4150-b013-a23fd0127df0","subtype":"Chart","type":"Plot"}},"id":"0146c29a-f134-47ff-abfa-25802c6606e1","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.5, 9]"],"chart_index":[{"POS_ARR_DELAY":"(8.5, 9]"}],"values":[8.929032258064517],"x":[8],"y":["Monday"]}},"id":"755486bd-5f30-4e0f-a9ae-3bb7c5aa0e20","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"b4eec242-ede1-4480-bb1f-ed9095afd350","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"d3f14eca-873c-4f9f-9b61-8273d43d69a0","subtype":"Chart","type":"Plot"}},"id":"4519201f-9fad-4272-ac00-9738814e04c5","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"dbdf360c-bd4d-4150-b013-a23fd0127df0","subtype":"Chart","type":"Plot"}},"id":"876b6ad2-93d8-44d8-98d7-300466f70b24","type":"WheelZoomTool"},{"attributes":{},"id":"704127c1-69cb-4a54-a48f-5ab45ef7fb7d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d3f14eca-873c-4f9f-9b61-8273d43d69a0","subtype":"Chart","type":"Plot"}},"id":"de29df75-cae8-4b9b-ba36-d1dd156d39ab","type":"PanTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"015d6c76-0a57-4f11-ac64-2c28b04b2742","type":"BasicTickFormatter"},"plot":{"id":"d3f14eca-873c-4f9f-9b61-8273d43d69a0","subtype":"Chart","type":"Plot"},"ticker":{"id":"9bfb700a-db92-4f83-91fe-a2c57ff85324","type":"BasicTicker"}},"id":"2eaf0332-5b50-4a21-835d-0d47ab67609b","type":"LinearAxis"},{"attributes":{},"id":"92f73467-2f57-46d6-8c7b-ac78c44aae11","type":"ToolEvents"},{"attributes":{"plot":{"id":"d3f14eca-873c-4f9f-9b61-8273d43d69a0","subtype":"Chart","type":"Plot"}},"id":"ada4571e-088a-4c71-94c3-fd0d965d48a3","type":"HelpTool"},{"attributes":{"data_source":{"id":"755486bd-5f30-4e0f-a9ae-3bb7c5aa0e20","type":"ColumnDataSource"},"glyph":{"id":"ea8a1532-a00b-4d5e-92df-f8e9c3fe099e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"20a88730-83e2-4c7b-8bc8-71742d9cd338","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"05be07a0-673f-4fa3-91b7-a17364d40676","type":"Rect"},{"attributes":{},"id":"9a720b66-ddfc-47fd-82f3-9c9d47abde5d","type":"BasicTicker"},{"attributes":{},"id":"33928be4-0268-498f-81e6-606328277659","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8595be13-1e10-49ae-87d2-51a7f249b9e5","type":"Rect"},{"attributes":{"data_source":{"id":"12b3bbb6-9216-4921-b489-5067136d1fe4","type":"ColumnDataSource"},"glyph":{"id":"19ab7fb5-78d5-428c-b0e0-d93bf4c609db","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2d9cb05d-d1a4-49d2-86f5-181075af425c","type":"GlyphRenderer"},{"attributes":{},"id":"9bfb700a-db92-4f83-91fe-a2c57ff85324","type":"BasicTicker"}],"root_ids":["25d11881-b30f-48a9-b3e8-4e1694e3ded2"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"de5c9600-e3e8-47a5-93c9-f6ea84c827b1","elementid":"b175e8ba-b33a-40aa-a696-f2fafd203648","modelid":"25d11881-b30f-48a9-b3e8-4e1694e3ded2"}];
                  
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