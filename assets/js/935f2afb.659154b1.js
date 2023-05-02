"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Overview","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Intro","href":"/smithy4s/docs/overview/intro","docId":"overview/intro"},{"type":"link","label":"Quick Start","href":"/smithy4s/docs/overview/quickstart","docId":"overview/quickstart"},{"type":"link","label":"Installation","href":"/smithy4s/docs/overview/installation","docId":"overview/installation"},{"type":"link","label":"Installation (CLI)","href":"/smithy4s/docs/overview/cli","docId":"overview/cli"},{"type":"link","label":"Sharing specifications","href":"/smithy4s/docs/overview/sharing-specs","docId":"overview/sharing-specs"},{"type":"link","label":"Stubbed implementations","href":"/smithy4s/docs/overview/stubs","docId":"overview/stubs"}]},{"type":"category","label":"The Smithy IDL","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Smithy IDL","href":"/smithy4s/docs/the-smithy-idl/smithy-idl","docId":"the-smithy-idl/smithy-idl"},{"type":"link","label":"Smithy traits","href":"/smithy4s/docs/the-smithy-idl/traits","docId":"the-smithy-idl/traits"},{"type":"link","label":"Editor support","href":"/smithy4s/docs/the-smithy-idl/editor-support","docId":"the-smithy-idl/editor-support"}]},{"type":"category","label":"Protocols","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Protocols and Smithy4s","href":"/smithy4s/docs/protocols/protocols","docId":"protocols/protocols"},{"type":"link","label":"What is a Protocol?","href":"/smithy4s/docs/protocols/definition","docId":"protocols/definition"},{"type":"category","label":"AWS Protocols","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"AWS","href":"/smithy4s/docs/protocols/aws/aws","docId":"protocols/aws/aws"},{"type":"link","label":"Localstack","href":"/smithy4s/docs/protocols/aws/localstack","docId":"protocols/aws/localstack"}]},{"type":"category","label":"SimpleRestJson","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"SimpleRestJson","href":"/smithy4s/docs/protocols/simple-rest-json/overview","docId":"protocols/simple-rest-json/overview"},{"type":"link","label":"Server","href":"/smithy4s/docs/protocols/simple-rest-json/server","docId":"protocols/simple-rest-json/server"},{"type":"link","label":"Client","href":"/smithy4s/docs/protocols/simple-rest-json/client","docId":"protocols/simple-rest-json/client"},{"type":"link","label":"Openapi","href":"/smithy4s/docs/protocols/simple-rest-json/openapi","docId":"protocols/simple-rest-json/openapi"}]},{"type":"link","label":"Compliance Tests","href":"/smithy4s/docs/protocols/compliance-tests","docId":"protocols/compliance-tests"},{"type":"link","label":"Deriving CLIs","href":"/smithy4s/docs/protocols/deriving-cli","docId":"protocols/deriving-cli"},{"type":"link","label":"Alloy","href":"/smithy4s/docs/protocols/alloy","docId":"protocols/alloy"}]},{"type":"category","label":"Code generation","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Customization","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Packed inputs","href":"/smithy4s/docs/codegen/customisation/packed-inputs","docId":"codegen/customisation/packed-inputs"},{"type":"link","label":"ADTs","href":"/smithy4s/docs/codegen/customisation/adts","docId":"codegen/customisation/adts"},{"type":"link","label":"Collections","href":"/smithy4s/docs/codegen/customisation/collections","docId":"codegen/customisation/collections"},{"type":"link","label":"Type refinements","href":"/smithy4s/docs/codegen/customisation/refinements","docId":"codegen/customisation/refinements"},{"type":"link","label":"Unwrapping","href":"/smithy4s/docs/codegen/customisation/unwrapping","docId":"codegen/customisation/unwrapping"},{"type":"link","label":"Default rendering","href":"/smithy4s/docs/codegen/customisation/default-rendering","docId":"codegen/customisation/default-rendering"},{"type":"link","label":"Error Unions","href":"/smithy4s/docs/codegen/customisation/error-unions","docId":"codegen/customisation/error-unions"},{"type":"link","label":"Wildcard types","href":"/smithy4s/docs/codegen/customisation/wildcard","docId":"codegen/customisation/wildcard"}]},{"type":"link","label":"Unions and sealed traits","href":"/smithy4s/docs/codegen/unions","docId":"codegen/unions"},{"type":"link","label":"Default Values","href":"/smithy4s/docs/codegen/default-values","docId":"codegen/default-values"}]},{"type":"category","label":"Design","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"General design principles","href":"/smithy4s/docs/design/design","docId":"design/design"},{"type":"link","label":"Datatypes and schemas","href":"/smithy4s/docs/design/schemas","docId":"design/schemas"},{"type":"link","label":"Services and endpoints","href":"/smithy4s/docs/design/services","docId":"design/services"}]},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Endpoint Specific Middleware","href":"/smithy4s/docs/guides/endpoint-middleware","docId":"guides/endpoint-middleware"},{"type":"link","label":"Extracting Request Info","href":"/smithy4s/docs/guides/extract-request-info","docId":"guides/extract-request-info"},{"type":"link","label":"Model preprocessing","href":"/smithy4s/docs/guides/model-preprocessing","docId":"guides/model-preprocessing"},{"type":"link","label":"Smithy4s Transformations","href":"/smithy4s/docs/guides/smithy4s-transformations","docId":"guides/smithy4s-transformations"},{"type":"link","label":"Testing","href":"/smithy4s/docs/guides/testing","docId":"guides/testing"}]},{"type":"link","label":"Credits","href":"/smithy4s/docs/credits","docId":"credits"},{"type":"link","label":"Known Issues","href":"/smithy4s/docs/known-issues","docId":"known-issues"},{"type":"link","label":"Learning resources","href":"/smithy4s/docs/learning-resources","docId":"learning-resources"}]},"docs":{"codegen/customisation/adts":{"id":"codegen/customisation/adts","title":"Algebraic data types","description":"The default behavior of Smithy4s when rendering unions that target structures is to render the structure","sidebar":"tutorialSidebar"},"codegen/customisation/collections":{"id":"codegen/customisation/collections","title":"Specialised collection types","description":"Smithy supports list and set, Smithy4s renders that to List[A] and Set[A] respectively. You can also use the @uniqueItems annotation on list which is equivalent to set.","sidebar":"tutorialSidebar"},"codegen/customisation/default-rendering":{"id":"codegen/customisation/default-rendering","title":"Default rendering","description":"Smithy4s allows you to customize how defaults on the fields of smithy structures are rendered inside of case classes. There are three options:","sidebar":"tutorialSidebar"},"codegen/customisation/error-unions":{"id":"codegen/customisation/error-unions","title":"Error Unions representation","description":"By default, smithy4s renders service operations errors as ADTs. For example the following spec:","sidebar":"tutorialSidebar"},"codegen/customisation/packed-inputs":{"id":"codegen/customisation/packed-inputs","title":"Packed inputs","description":"By default, Smithy4s generates methods the parameters of which map to the fields of the input structure of the corresponding operation.","sidebar":"tutorialSidebar"},"codegen/customisation/refinements":{"id":"codegen/customisation/refinements","title":"Type refinements","description":"Type refinements provide a mechanism for using types that you control inside the code generated by smithy4s. Creating a refinement for use in your application starts with creating a custom smithy trait that represents the refinement.","sidebar":"tutorialSidebar"},"codegen/customisation/unwrapping":{"id":"codegen/customisation/unwrapping","title":"New types (and unwrapping)","description":"By default, smithy4s will wrap all standalone primitive types in a Newtype. A standalone primitive type is one that is defined like the following:","sidebar":"tutorialSidebar"},"codegen/customisation/wildcard":{"id":"codegen/customisation/wildcard","title":"Scala wildcard type arguments","description":"Scala has a specific syntax for wildcard argument in types. In Scala 2, that was the underscore: _. But with Scala 3, this is changing. See the language reference page for more information.","sidebar":"tutorialSidebar"},"codegen/default-values":{"id":"codegen/default-values","title":"Default Values","description":"Null Default","sidebar":"tutorialSidebar"},"codegen/unions":{"id":"codegen/unions","title":"Unions and sealed traits","description":"Smithy\'s union keyword allow to define a co-product, namely a piece of data that can take one form among a list of possibilities.","sidebar":"tutorialSidebar"},"credits":{"id":"credits","title":"A Special Thanks To","description":"Yourkit","sidebar":"tutorialSidebar"},"design/design":{"id":"design/design","title":"General design principles","description":"Before we dive in to the design elements, it is important to state that Smithy4s is designed with the following constraints :","sidebar":"tutorialSidebar"},"design/schemas":{"id":"design/schemas","title":"Datatypes and schemas","description":"As stated before, Smithy4s generates code that does not depends on any third-party library.","sidebar":"tutorialSidebar"},"design/services":{"id":"design/services","title":"Services and endpoints","description":"In addition to relying heavily on a Schema construct, which enables abstracting over serialisation, Smithy4s uses abstractions to codify the notion of interface, to allow for interoperability with various communication protocols. The idea is to reason generically about things of this shape :","sidebar":"tutorialSidebar"},"guides/endpoint-middleware":{"id":"guides/endpoint-middleware","title":"Endpoint Specific Middleware","description":"It used to be the case that any middleware implemented for smithy4s services would have to operate at the http4s level, without any knowledge of smithy4s or access to the constructs to utilizes.","sidebar":"tutorialSidebar"},"guides/extract-request-info":{"id":"guides/extract-request-info","title":"Extracting Request Information","description":"There are times where the implementation of your route handlers may require more information from the underlying http4s request.","sidebar":"tutorialSidebar"},"guides/model-preprocessing":{"id":"guides/model-preprocessing","title":"Smithy Model preprocessing","description":"There are times that you may want to transform the Smithy model being used by Smithy4s prior to code generation. This happens often when the model in question is provided by a third party: you may only be interested in a couple operations from a third party service, or you may want to remove some fields that are irrelevant for your use-case from of a response,","sidebar":"tutorialSidebar"},"guides/smithy4s-transformations":{"id":"guides/smithy4s-transformations","title":"Smithy4s Transformations and generalisation","description":"It is often the case that users may want to manipulate the generated interfaces in a generic way, be that to transform the context in which the interface operates, or to apply some generic behaviour when running methods.","sidebar":"tutorialSidebar"},"guides/testing":{"id":"guides/testing","title":"Testing Smithy4s Applications","description":"In this guide, we will give you some guiding principles and other things to consider when testing Smithy4s applications.","sidebar":"tutorialSidebar"},"known-issues":{"id":"known-issues","title":"Known Issues","description":"Here is a list of known issues in upstream libraries, documented in case you encounter them.","sidebar":"tutorialSidebar"},"learning-resources":{"id":"learning-resources","title":"Learning resources","description":"Here\'s a list of some useful learning resources for Smithy and Smithy4s:","sidebar":"tutorialSidebar"},"overview/cli":{"id":"overview/cli","title":"Installation (CLI)","description":"Beside the provided sbt plugin, smithy4s can be used as a CLI. It allows generating Scala code and OpenAPI specs from smithy specs.","sidebar":"tutorialSidebar"},"overview/installation":{"id":"overview/installation","title":"Installation","description":"Smithy4s generates Scala code from a Smithy model. The generated code includes traits for any services you might define, as well as case classes for models used in these services. It has no dependencies on external libraries or any specific protocol like HTTP or JSON. It does, however, depend on a \\"core\\" library that contains a number of interfaces implemented by the generated code.","sidebar":"tutorialSidebar"},"overview/intro":{"id":"overview/intro","title":"Intro","description":"Smithy is an interface definition language (IDL) provided by AWS. It is protocol agnostic, flexible, and reasonably low surface, which facilitates the writing of tooling around it.","sidebar":"tutorialSidebar"},"overview/quickstart":{"id":"overview/quickstart","title":"Quick Start","description":"Below is a quick example of smithy4s in action. This page does not provide much explanation or detail. For more information on various aspects of smithy4s, read through the other sections of this documentation site.","sidebar":"tutorialSidebar"},"overview/sharing-specs":{"id":"overview/sharing-specs","title":"Sharing specifications","description":"The core Smithy tooling built by AWS makes it easy to load Smithy files that are packaged in jars. Smithy4s makes use of this feature to allow users","sidebar":"tutorialSidebar"},"overview/stubs":{"id":"overview/stubs","title":"Stubbed implementations","description":"For various reasons, such as testing/mocking, you may want to instantiate a stub implementation of generated service interfaces. Smithy4s makes it easy, by generating a Default class in the companion object of each service.","sidebar":"tutorialSidebar"},"protocols/alloy":{"id":"protocols/alloy","title":"Alloy","description":"Throughout the smithy4s documentation and its various protocols, you are likely to run into the term alloy at some point. Alloy is an open-source set of Smithy shapes that we have published and use across our projects.","sidebar":"tutorialSidebar"},"protocols/aws/aws":{"id":"protocols/aws/aws","title":"aws","description":"WARNING: THIS IS EXPERIMENTAL, DO NOT NOT EXPECT PRODUCTION READINESS","sidebar":"tutorialSidebar"},"protocols/aws/localstack":{"id":"protocols/aws/localstack","title":"localstack","description":"It is a common need to be able to test AWS operations on a local environment. For that, many engineers have turned to Localstack.","sidebar":"tutorialSidebar"},"protocols/compliance-tests":{"id":"protocols/compliance-tests","title":"Compliance Tests","description":"The Smithy prelude has support for compliance testing for services that use HTTP as their protocol. It is built on top of regular traits, you can read more about it over here.","sidebar":"tutorialSidebar"},"protocols/definition":{"id":"protocols/definition","title":"What is a Protocol?","description":"Most definitions of \\"protocol\\" you read online say something like, \\"a set of rules defined for communication on or between computers.\\" This is a good definition, but it also highlights the issue in understanding this topic: the definition is very broad. Because of this, the word \\"protocol\\" is used to refer to different things in different contexts. In this article, we will break down what a protocol is by looking at different types and giving examples. We will then relate things back to Smithy and Smithy4s.","sidebar":"tutorialSidebar"},"protocols/deriving-cli":{"id":"protocols/deriving-cli","title":"Deriving CLIs","description":"- The Smithy4s Decline module provides the capability to derive a Decline Cli for your service.","sidebar":"tutorialSidebar"},"protocols/protocols":{"id":"protocols/protocols","title":"Protocols and Smithy4s","description":"The code generated by Smithy4s is strictly protocol agnostic, meaning that there is no particular processing to handle HTTP semantics, or JSON semantics in the generated code.","sidebar":"tutorialSidebar"},"protocols/simple-rest-json/client":{"id":"protocols/simple-rest-json/client","title":"SimpleRestJson client","description":"The smithy4s-http4s module provides functions that transform low-level http4s clients into high-level stubs, provided the corresponding service definitions (in smithy) are annotated with the alloy#simpleRestJson protocol.","sidebar":"tutorialSidebar"},"protocols/simple-rest-json/openapi":{"id":"protocols/simple-rest-json/openapi","title":"Openapi","description":"At build-time, when encountering a service annotated with the alloy#simpleRestJson protocol, Smithy4s will automatically generate an openapi \\"view\\" for this service.","sidebar":"tutorialSidebar"},"protocols/simple-rest-json/overview":{"id":"protocols/simple-rest-json/overview","title":"The SimpleRestJson protocol","description":"Smithy4s provides a custom Json-in/Json-out protocol that smithy services can be annotated with.","sidebar":"tutorialSidebar"},"protocols/simple-rest-json/server":{"id":"protocols/simple-rest-json/server","title":"SimpleRestJson server","description":"The smithy4s-http4s module provides functions that transform instances of the generated interfaces into http4s routes, provided the corresponding service definitions (in smithy) are  annotated with the alloy#simpleRestJson protocol.","sidebar":"tutorialSidebar"},"the-smithy-idl/editor-support":{"id":"the-smithy-idl/editor-support","title":"Editor Support","description":"Disney Streaming develops and maintains a Smithy language server, that implements features such as jump-to-definition, auto-completion, validation diagnostics.","sidebar":"tutorialSidebar"},"the-smithy-idl/smithy-idl":{"id":"the-smithy-idl/smithy-idl","title":"The Smithy IDL","description":"Smithy is a protocol agnostic definition language. It means that it is not tied to any transport or application protocol or serialisation mechanism, be that http, websockets, json, protobuf, etc.","sidebar":"tutorialSidebar"},"the-smithy-idl/traits":{"id":"the-smithy-idl/traits","title":"Smithy traits","description":"Smithy comes with a powerful annotation system. Annotations in smithy are called traits.","sidebar":"tutorialSidebar"}}}')}}]);