(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{398:function(e,r,t){"use strict";t.r(r);var a=t(42),n=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Why-Do-You-Need-Transfe-Learning"}},[e._v("What is Transfer Learning")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%5BTransferLearning-Inner-Workings"}},[e._v("Transfer Learning Magical Properties")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#How-Does-Transfer-Learning-Work"}},[e._v("How Does Transfer Learning Work")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Where-to-Find-Pretrained-Models"}},[e._v("Where to Find Pretrained Models")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Conclusions"}},[e._v("Conclusions")])])]),e._v(" "),t("h2",{attrs:{id:"what-is-transfer-learning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-transfer-learning"}},[e._v("#")]),e._v(" What is Transfer Learning")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Transfer_learning",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transfer Learning"),t("OutboundLink")],1),e._v(" is a research problem in Machine Learning that focuses on storing knowledge gained while solving one problem and applying it to a different but related problem.")]),e._v(" "),t("p",[e._v("This is done by using an existing model, "),t("em",[e._v("pre-trained")]),e._v(" on another dataset (usually bigger and with generic content, like "),t("a",{attrs:{href:"http://www.image-net.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ImageNet"),t("OutboundLink")],1),e._v("), and then "),t("em",[e._v("fine-tuning")]),e._v(" the model on a smaller and similar dataset.")]),e._v(" "),t("p",[e._v("For example, you can fine-tune a pre-trained model from ImageNet on your much smaller dataset of images, in order to benefit the pre-training and obtain a series of almost-magical properties and results.")]),e._v(" "),t("p",[e._v("To get a comprehensive overview of Why, What and How is used Transfer Learning, plus possible applications, read this awesome article:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://ruder.io/transfer-learning/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transfer Learning - Machine Learning's Next Frontier"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"transfer-learning-magical-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transfer-learning-magical-properties"}},[e._v("#")]),e._v(" Transfer Learning Magical Properties")]),e._v(" "),t("p",[e._v("The theory of Transfer Learning suggests that when using a pre-trained model on a similar dataset:")]),e._v(" "),t("p",[t("strong",[e._v("You need less")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Data: you need much smaller datasets to obtain the same (or better) model performances")]),e._v(" "),t("li",[e._v("Computational Power / Computational Time: empirical results have shown that pre-trained models reach top performances after much fewer epochs of training, than starting the training from scratch")])]),e._v(" "),t("p",[t("strong",[e._v("You improve:")])]),e._v(" "),t("ul",[t("li",[e._v("Out-of-sample generalization: when predicting on test data you often obtain better accuracy, thus reducing overfitting (or whatever metric you're using)")]),e._v(" "),t("li",[e._v('Robustness: you make the model more "robust" to real-world low-quality data')])]),e._v(" "),t("p",[e._v("So, "),t("strong",[e._v("the first thing to do")]),e._v(" every time you frame a new problem, is to ask yourself:")]),e._v(" "),t("p",[t("strong",[e._v("Can I leverage Transfer Learning in solving this problem?")])]),e._v(" "),t("p",[e._v("If the answer is yes, be sure that the model you're using:")]),e._v(" "),t("ul",[t("li",[e._v("is robust and produces sounds results")]),e._v(" "),t("li",[e._v("it's results are reproducible")]),e._v(" "),t("li",[e._v("it's input it's compatible with your data")]),e._v(" "),t("li",[e._v("the source dataset (on which the model has been pre-trained) and the target dataset (your one) are similar enough")])]),e._v(" "),t("p",[e._v("See:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://medium.com/@janetnim401/finding-similarities-in-datasets-350072a78a18",target:"_blank",rel:"noopener noreferrer"}},[e._v("Finding Similarities in Datasets"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.researchgate.net/post/How_to_measure_similarity_or_dissimilarity_between_two_data_set",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to measure similarity or dissimilarity between two data set?"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.emis.de/journals/RCE/V37/V37n1a06Gonzalez-AbrilEtAl.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Three Similarity Measures between One-Dimensional Data Sets"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"how-does-transfer-learning-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-does-transfer-learning-work"}},[e._v("#")]),e._v(" How Does Transfer Learning Work")]),e._v(" "),t("p",[e._v("The practice of Transfer Learning allows reusing most of the parameters (weights) of a neural network previously trained on a problem similar to the one we have to solve, dwelling on the training only of the last layers that are usually those dedicated to the classification and/or regression of the features obtained with the previous layers.")]),e._v(" "),t("p",[e._v("This allows us to obtain two key results:")]),e._v(" "),t("ul",[t("li",[e._v("reuse of the behavior of a model already trained to effectively "),t("strong",[e._v("extract features")]),e._v(" from input data")]),e._v(" "),t("li",[e._v("limit processing to a significantly "),t("strong",[e._v("smaller number of parameters")]),e._v(", thus speeding up the training time by a big margin (corresponding to the last layers)")])]),e._v(" "),t("p",[e._v("For example, if we were to classify apple varieties from an image, we could start by using a neural network already trained to classify images of planes, cars, dogs, cats, eggs, etc... This is because of the greater variety of training dataset ensures a better ability to extract features of various kinds from images.")]),e._v(" "),t("p",[e._v("Of the "),t("em",[e._v("pre-trained neural network")]),e._v(", we would keep only the initial layers, because they extract lower-level features (for examples lines and edges, which are common across every existing 2D image), and so we redefine only the last layers of classification.")]),e._v(" "),t("p",[e._v('The reused layers would be labeled as "read-only" or "frozen", in order to train only the parameters corresponding to the last layers, speeding up the training time, reducing the processing power required, and generally improving the accuracy.')]),e._v(" "),t("p",[e._v("In general, the set of layers that are reused by a pre-trained network is called a backbone or feature-extractor.")]),e._v(" "),t("p",[e._v('The practice of applying Transfer Learning theory to real-world models is called "fine-tuning".')]),e._v(" "),t("p",[e._v("Often where using a pre-trained model it's a good practice to reuse all the layers except the last one, but you can experiment with removing last "),t("em",[e._v("N")]),e._v(" layers (usually not more than 3-4).")]),e._v(" "),t("p",[e._v("To learn more about Transfer Learning:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://arxiv.org/abs/1911.02685?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%253A+arxiv%252FQSXk+%2528ExcitingAds%2521+cs+updates+on+arXiv.org%2529",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Comprehensive Survey on Transfer Learning"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://papers.nips.cc/paper/5347-how-transferable-are-features-in-deep-neural-networks.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("How transferable are features in deep neural networks?"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://arxiv.org/abs/1901.09960",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Pre-Training Can Improve Model Robustness and Uncertainty"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://arxiv.org/abs/1608.08614",target:"_blank",rel:"noopener noreferrer"}},[e._v("What makes ImageNet good for transfer learning?"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"where-to-find-pretrained-models"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-to-find-pretrained-models"}},[e._v("#")]),e._v(" Where to Find Pretrained Models")]),e._v(" "),t("p",[e._v("Having clear in mind how useful it is to be able to use pre-trained templates to solve your problem, let's now see where on the Internet you can find these templates, plus some guides and tutorials to do the "),t("em",[e._v("fine tune")]),e._v(" them.")]),e._v(" "),t("p",[e._v("Some general purposes places where you fill find pre-trained models are:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://modelzoo.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Model Zoo"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.tensorflow.org/hub",target:"_blank",rel:"noopener noreferrer"}},[e._v("TensorFlow Hub"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://paperswithcode.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Papers with Code"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://keras.rstudio.com/articles/applications.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keras Pre-Trained Models"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("It's very likely that you will find a model that fits your needs in these places. If you can't try to google")]),e._v(" "),t("h3",{attrs:{id:"pre-trained-models-computer-vision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-trained-models-computer-vision"}},[e._v("#")]),e._v(" Pre-Trained Models: Computer Vision")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/balavenkatesh3322/CV-pretrained-model?fbclid=IwAR3Q1-xSTP46P5Mg_BRxgxskDBS9q5B7wHeJl_z3TO_0ABee3LkYIDd4bI0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Computer Vision pre-trained models - GitHub"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rwightman/pytorch-image-models",target:"_blank",rel:"noopener noreferrer"}},[e._v("PyTorch Image Models"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/qubvel/segmentation_models.pytorch",target:"_blank",rel:"noopener noreferrer"}},[e._v("PyTorch Segmentation Models"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/qubvel/classification_models",target:"_blank",rel:"noopener noreferrer"}},[e._v("Classification Models (TF and Keras)"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"pre-trained-models-natural-language-processing-and-understanding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-trained-models-natural-language-processing-and-understanding"}},[e._v("#")]),e._v(" Pre-Trained Models: Natural Language Processing and Understanding")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/balavenkatesh3322/NLP-pretrained-model",target:"_blank",rel:"noopener noreferrer"}},[e._v("NLP Pre-Trained Models"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://arxiv.org/abs/2003.08271",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pre-Trained Models for Natural Language Processing: A Survey"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://huggingface.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hugging Face Website"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/huggingface",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hugging Face Repository"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/microsoft/nlp-recipes",target:"_blank",rel:"noopener noreferrer"}},[e._v("NLP Recipes - Microsoft"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"transfer-learning-tutorials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transfer-learning-tutorials"}},[e._v("#")]),e._v(" Transfer Learning Tutorials")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://towardsdatascience.com/a-comprehensive-hands-on-guide-to-transfer-learning-with-real-world-applications-in-deep-learning-212bf3b2f27a",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Comprehensive Hands-on Guide to Transfer Learning"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.tensorflow.org/2020/05/bigtransfer-bit-state-of-art-transfer-learning-computer-vision.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BigTransfer (BiT): State-of-the-art transfer learning for computer vision"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.hackerearth.com/practice/machine-learning/transfer-learning/transfer-learning-intro/tutorial/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transfer Learning in Practice with Keras"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.tensorflow.org/tutorials/images/transfer_learning",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transfer learning with a pretrained ConvNet"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.tensorflow.org/official_models/fine_tuning_bert",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fine-tuning a BERT model"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pytorch Model Transfer Learning for Computer Vision"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"conclusions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),t("p",[e._v("In this guide, you've seen what is Transfer Learning, why it's so useful, and why it's a hot topic in research today. Also, now you know where to find the model that fits your needs!")])])}),[],!1,null,null,null);r.default=n.exports}}]);