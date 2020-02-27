(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{278:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("Hero"),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("Tulin is a pip installable collection of small tools and libraries to help expedite the machine learning workflow. At present, centered around fastai, features include a callback that supports autosave and Tensorboard logging, as well as Jupyter based application development support in the form of an exporter that converts Jupyter notebooks into Python code.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("Machine learning and it's tooling support is still in it's early stages. Over the course of development, scripts that were written as one off helper functions may become used over and over. There was a need to consolidate these tools and create a platform that allowed for the easy collection, implementation and usage of these tools. Tulin is a pip installable collection of such scripts.")]),e._v(" "),a("h2",{attrs:{id:"design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),a("p",[e._v("Most design aspects of the functionality in the scripts are centered around "),a("code",[e._v("fast.ai")]),e._v(" and its development workflows. fast.ai has an excellent callback system which allows for almost any functionality to be effectively (and in an officially supported way) monkey patched into its workflow. In addition, Tulin includes an "),a("code",[e._v("Export")]),e._v(" script that copies another fastai workflow - converting Jupyter notebooks into Python libraries and applications. This allows Jupyter notebook users to build and experiment with code in a notebook and then convert the relevant cells of those notebooks into Python scripts.")]),e._v(" "),a("h2",{attrs:{id:"fastai-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fastai-callback"}},[e._v("#")]),e._v(" FastAI Callback")]),e._v(" "),a("h3",{attrs:{id:"autosave"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autosave"}},[e._v("#")]),e._v(" Autosave")]),e._v(" "),a("p",[e._v('The autosave functionality of the fastai callback allows the user to specify a "primary metric" - a metric used with the fastai learner. The callback then keeps track of that value of the metric each epoch. If the new value is better than the last best value, the value is updated and the model is saved along with information about the metric and the epoch it happened. This not only allows for the best network to be saved but also helps guide in determining the number of epochs to use.')]),e._v(" "),a("h3",{attrs:{id:"tensorboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tensorboard"}},[e._v("#")]),e._v(" Tensorboard")]),e._v(" "),a("p",[e._v("In addition to tracking the primary metric, the callback logs all metrics to Tensorboard using the "),a("a",{attrs:{href:"https://pytorch.org/docs/stable/tensorboard.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("official support built into PyTorch 1.2+"),a("OutboundLink")],1),e._v(", which eliminates the need for TensorboardX. The current official fastai implementation of Tensorboard relies on TensorboardX, so this implementation was created to use the latest and direct method of PyTorch/Tensorboard logging.")]),e._v(" "),a("h2",{attrs:{id:"export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[e._v("#")]),e._v(" Export")]),e._v(" "),a("p",[e._v("Inspired by Sylvain Gugger and Jeremy Howard's "),a("a",{attrs:{href:"https://github.com/fastai/fastai_dev/blob/master/dev/91_notebook_export.ipynb",target:"_blank",rel:"noopener noreferrer"}},[e._v("implementation in fastai-dev"),a("OutboundLink")],1),e._v(", the Export functionality allows development to be done in Jupyter notebooks for complex libraries and applications in a experimental manner.")]),e._v(" "),a("p",[e._v("The export script looks for cells that need to be exported (which contains the comment "),a("code",[e._v("#export")]),e._v(" at the top of the cell) and generates a Python file from the notebook. Additionally, to allow for the notebook to import files generated from other notebooks, packages are imported from the output folder i.e. "),a("code",[e._v("import src.<package>")]),e._v(". The exporter script changes these values to "),a("code",[e._v("import .<package>")]),e._v(" so scripts in the output folder also import from the output folder. The Export script takes fastai's implementation one step further by being implemented as a pip installable library, so that any notebook folder can run the export script and generate Python code from it.")]),e._v(" "),a("p",[e._v("Note, because the export script relies on relative paths, launching entrypoint scripts in the traditional manner (i.e. file has "),a("code",[e._v("if __name__ == __main__")]),e._v(" and "),a("code",[e._v("python app.py")]),e._v(") does not work. This is because relative imports use the name to determine relativity but when launched this way with Python,"),a("code",[e._v("__name__")]),e._v(" is set to "),a("code",[e._v("__main__")]),e._v(" to denote it as the entry script. Instead, to launch your entry script, use the module method of invocation: "),a("code",[e._v("python -m src.app")]),e._v(" - this must be done from outside the src folder (which is now being treated as a module).")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Update")]),e._v(" "),a("p",[e._v("Since the building of this tool, fast.ai has released nbdev which handles this Jupyter notebook development my more elegantly. At present, the Export functionality is deprecated with future review for removal and integration of "),a("a",{attrs:{href:"https://www.fast.ai/2019/12/02/nbdev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("fast.ai's nbdev"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("As of this update, Tulin is intended to be installed as an editable package. The install bash script in the src folder handles this for us:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pip install -e . --user\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("The fastai callback can then be appended to the fastai learner:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('from tulin.fastai import Callback\nlearner.callbacks.append(Callback(learner, "<primary metric>", "<experiment name>", "<experiment comments>"))\n')])])]),a("p",[e._v("The exporter should be executed using Python and the "),a("code",[e._v("-m")]),e._v(" flag in the directory you wish to export:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("python -m tulin.scripts.export\n")])])]),a("h2",{attrs:{id:"future-plans"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#future-plans"}},[e._v("#")]),e._v(" Future Plans")]),e._v(" "),a("ul",[a("li",[e._v("integration of experiments library to help with testing different networks and hyperparemeters")]),e._v(" "),a("li",[e._v("integration of automatic Bayesian Optimization")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);