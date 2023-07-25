package smithy4s.example

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.string
import smithy4s.schema.Schema.struct

final case class ValidationChecks(str: Option[String] = None, lst: Option[List[String]] = None, int: Option[Int] = None)
object ValidationChecks extends ShapeTag.Companion[ValidationChecks] {
  val hints: Hints = Hints.empty

  val str = string.validated(smithy.api.Length(min = Some(1L), max = Some(10L))).optional[ValidationChecks]("str", _.str).addHints(smithy.api.HttpQuery("str"))
  val lst = StringList.underlyingSchema.validated(smithy.api.Length(min = Some(1L), max = Some(10L))).optional[ValidationChecks]("lst", _.lst).addHints(smithy.api.HttpQuery("lst"))
  val int = smithy4s.schema.Schema.int.validated(smithy.api.Range(min = Some(scala.math.BigDecimal(1.0)), max = Some(scala.math.BigDecimal(10.0)))).optional[ValidationChecks]("int", _.int).addHints(smithy.api.HttpQuery("int"))

  implicit val schema: Schema[ValidationChecks] = struct(
    str,
    lst,
    int,
  ){
    ValidationChecks.apply
  }.withId(ShapeId("smithy4s.example", "ValidationChecks")).addHints(hints)
}
