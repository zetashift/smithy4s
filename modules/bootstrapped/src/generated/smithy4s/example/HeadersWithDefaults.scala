package smithy4s.example

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.string
import smithy4s.schema.Schema.struct

final case class HeadersWithDefaults(dflt: String = "test")
object HeadersWithDefaults extends ShapeTag.Companion[HeadersWithDefaults] {
  val hints: Hints = Hints.empty

  val dflt = string.required[HeadersWithDefaults]("dflt", _.dflt).addHints(smithy.api.Default(smithy4s.Document.fromString("test")), smithy.api.HttpHeader("dflt"))

  implicit val schema: Schema[HeadersWithDefaults] = struct(
    dflt,
  ){
    HeadersWithDefaults.apply
  }.withId(ShapeId("smithy4s.example", "HeadersWithDefaults")).addHints(hints)
}
