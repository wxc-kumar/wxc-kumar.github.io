(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{275:function(e,t,a){"use strict";a.r(t);var r=a(0),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("Hero"),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("This article assumes that you are part of a technical team (software engineering, design, testing, etc.) but do not currently employ machine learning or have machine learning engineers but are looking to introduce machine learning into your workflow, team or company.")]),e._v(" "),a("h2",{attrs:{id:"no-affiliation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-affiliation"}},[e._v("#")]),e._v(" No Affiliation")]),e._v(" "),a("p",[e._v("This post and author have no affiliation with fast.ai other than being a user of the library and a student of the courses.")]),e._v(" "),a("h2",{attrs:{id:"fast-ai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-ai"}},[e._v("#")]),e._v(" fast.ai")]),e._v(" "),a("h3",{attrs:{id:"the-organization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-organization"}},[e._v("#")]),e._v(" The Organization")]),e._v(" "),a("p",[e._v("fast.ai is a small organization of made up of Jeremy Howard (founding CEO of Enlitic, President and Chief Scientist of Kaggle, amongst many other high profile projects), Dr. Rachel Thomas (Director of USF Center for Applied Data Ethics, Math PhD from Duke, speaker and instructor) and Sylvain Gugger (Mathematics and Computer Science teacher, ML Researcher and Educator). More about their background can be found on the "),a("a",{attrs:{href:"https://www.fast.ai/about/",target:"_blank",rel:"noopener noreferrer"}},[e._v("fast.ai/about"),a("OutboundLink")],1),e._v(" page. However, while the staff of fast.ai is small, the organization itself is huge. The "),a("a",{attrs:{href:"https://forums.fast.ai/about",target:"_blank",rel:"noopener noreferrer"}},[e._v("forums have 31,000 users"),a("OutboundLink")],1),e._v(" and the "),a("a",{attrs:{href:"https://github.com/fastai/fastai/graphs/contributors",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1 library has 498 contributors"),a("OutboundLink")],1),e._v(". Put together, this creates a huge community of researchers, students, engineers and more to with the goal of making AI accessible to everyone.")]),e._v(" "),a("h3",{attrs:{id:"the-course"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-course"}},[e._v("#")]),e._v(" The Course")]),e._v(" "),a("p",[e._v("fast.ai is also a Massively Open Online Course (MOOC) consisting of multiple courses, including ML, Linear Algebra and NLP. The two courses of most interest are "),a("a",{attrs:{href:"http://course.fast.ai/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Practical Deep Learning for Coders"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://course.fast.ai/part2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deep Learning from the Foundations"),a("OutboundLink")],1),e._v(". The former focuses on getting moving with ML immediately to start producing results and the latter focuses on the core concepts of the behind the technology.")]),e._v(" "),a("h3",{attrs:{id:"the-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-library"}},[e._v("#")]),e._v(" The Library")]),e._v(" "),a("h4",{attrs:{id:"pytorch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pytorch"}},[e._v("#")]),e._v(" PyTorch")]),e._v(" "),a("p",[e._v("There are two major libraries in the deep learning space: TensorFlow and PyTorch. Without any hard evidence, the community consensus is that TensorFlow tends to be used in production, while PyTorch is used in smaller scale to support experimentation. This statement may be a bit misleading - TensorFlow is used by organizations like Google to implement known working architectures at massive scale. However, if you are just stepping into machine learning, you will not be doing this. You will likely be experimenting with data, trying out different architectures and generally be working in a way which requires the flexibility of PyTorch. This isn't to say that PyTorch can't be used in production, which it can. This only means that with PyTorch you don't need to have your solution upfront ready to be converted into large scale model deployment like with TensorFlow. In addition, TensorFlow has several other issues such as issues with documentation (you will be reading a LOT of documentation and you want your libraries to be good at this) as well as the lack of maturity of the "),a("code",[e._v("tf.eager")]),e._v(" implementation. PyTorch is so widely preferred that almost all research papers are done in PyTorch and even the leading research organization OpenAI has just announced their "),a("a",{attrs:{href:"https://openai.com/blog/openai-pytorch/",target:"_blank",rel:"noopener noreferrer"}},[e._v("standardization to PyTorch"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("fast.ai is built on top of PyTorch and is deeply integrated with it, from layers to the training loop. Those who know PyTorch can easily adopt fast.ai and those who learn fast.ai will intrinsically learn PyTorch. The two go very well together and increase the value of each other.")]),e._v(" "),a("h4",{attrs:{id:"research"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#research"}},[e._v("#")]),e._v(" Research")]),e._v(" "),a("p",[e._v("fast.ai has an added advantage over just using plain PyTorch - the fast.ai team and community are continually experimenting with the latest research and integrating them into the library. The library is full of such micro research integration, which are too many to list here, however one of them that stands out is "),a("code",[e._v("One Cycle Training")]),e._v(". One Cycle Training is based on a paper by Leslie Smith called "),a("a",{attrs:{href:"https://arxiv.org/pdf/1803.09820.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Disciplined Approach to Neural Network Hyper-Parameters"),a("OutboundLink")],1),e._v(' which is a specific method of changing the learning rate and momentum within an epoch to achieve "superconvergence" where a trained network achieves near maximize convergence within a few epochs. More about this can be read in the fast.ai documentation on (One Cycle Policy)[https://docs.fast.ai/callbacks.one_cycle.html#The-1cycle-policy]. Because of the integration of leading research, training results in fast.ai tend to be significantly better than other libraries.')]),e._v(" "),a("h4",{attrs:{id:"tooling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tooling"}},[e._v("#")]),e._v(" Tooling")]),e._v(" "),a("p",[e._v("Finally, fast.ai provides several key implementations to make the deep learning process move faster, including the "),a("a",{attrs:{href:"https://docs.fast.ai/data_block.html#The-data-block-API",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Block API"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://docs.fast.ai/training.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("training loop"),a("OutboundLink")],1),e._v(", batch visualization, learning rate finder and more.")]),e._v(" "),a("h2",{attrs:{id:"why-fast-ai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-fast-ai"}},[e._v("#")]),e._v(" Why fast.ai")]),e._v(" "),a("p",[e._v("Put together, the fast.ai organization, course and library provide a powerful combination that getting moving quickly in state of the art deep learning. Because of its large student and researcher based community, the fast.ai library is always getting enhancements, updates and callbacks that implement new state of the art deep learning findings. In addition, the course acts as a video manual for the library - because the course happens every year (and generally in two parts, six months apart), the new course videos will cover the latest research findings, which are already implemented in the library ready to use.")]),e._v(" "),a("p",[e._v("Eventually, you will find a place that fast.ai isn't enough to solve your problem directly. Even in these situations, fast.ai can help with the solution. Because fast.ai is based on PyTorch, it is possible to side step fast.ai for PyTorch where necessary (and in fact, as stated by Jeremy, you need to know PyTorch to be able to effectively use fast.ai). For example, if you need a specific type of network for your specific data structure, you can inherit from fast.ai to build your data loaders such that they are compatible with the data blocks API and you can build a custom network using PyTorch and plug it in to the fast.ai training loop, getting the best of both worlds.")]),e._v(" "),a("h2",{attrs:{id:"how-to-introduce-fast-ai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-introduce-fast-ai"}},[e._v("#")]),e._v(" How to Introduce fast.ai")]),e._v(" "),a("p",[e._v("The quickest way to introduce fast.ai is to use all of its existing constructs, especially the Data Blocks API. Format you data to match one of the methods via which the Data Blocks API, for example in columnar data in CSV files or folders with images with the folder name as the label. Quickly preparing your data for fast.ai existing data structures such as ImageList, etc. will allow you to get to the important part of deep learning - training and using the model for predictions and will produce the quickest ROI.")]),e._v(" "),a("h2",{attrs:{id:"future"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#future"}},[e._v("#")]),e._v(" Future")]),e._v(" "),a("p",[e._v("The version 2 of the fast.ai library is set to release soon, likely with the 2020 Course that starts in March. Jeremy and team had several live streamed conversations to show that while the external interfaces of fast.ai, such as the Data Blocks API will see little to no change, but the internal implementations will be much refined. As such, while there is a new version of the library coming down the line, it's coming with it's own video course and a high degree of backwards compatibility.")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);