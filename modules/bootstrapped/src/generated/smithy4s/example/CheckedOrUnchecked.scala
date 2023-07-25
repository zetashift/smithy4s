package smithy4s.example

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.bijection
import smithy4s.schema.Schema.string
import smithy4s.schema.Schema.union

sealed trait CheckedOrUnchecked extends scala.Product with scala.Serializable {
  @inline final def widen: CheckedOrUnchecked = this
  def _ordinal: Int
}
object CheckedOrUnchecked extends ShapeTag.Companion[CheckedOrUnchecked] {
  val hints: Hints = Hints.empty

  final case class CheckedCase(checked: String) extends CheckedOrUnchecked { final def _ordinal: Int = 0 }
  def checked(checked:String): CheckedOrUnchecked = CheckedCase(checked)
  final case class RawCase(raw: String) extends CheckedOrUnchecked { final def _ordinal: Int = 1 }
  def raw(raw:String): CheckedOrUnchecked = RawCase(raw)

  object CheckedCase {
    val hints: Hints = Hints.empty
    val schema: Schema[CheckedCase] = bijection(string.addHints(hints).validated(smithy.api.Pattern("^\\w+$")), CheckedCase(_), _.checked)
    val alt = schema.oneOf[CheckedOrUnchecked]("checked")
  }
  object RawCase {
    val hints: Hints = Hints.empty
    val schema: Schema[RawCase] = bijection(string.addHints(hints), RawCase(_), _.raw)
    val alt = schema.oneOf[CheckedOrUnchecked]("raw")
  }

  implicit val schema: Schema[CheckedOrUnchecked] = union(
    CheckedCase.alt,
    RawCase.alt,
  ){
    _._ordinal
  }.withId(ShapeId("smithy4s.example", "CheckedOrUnchecked")).addHints(hints)
}
