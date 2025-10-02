from django.db import migrations


def ensure_email_field(apps, schema_editor):
    connection = schema_editor.connection
    table_name = "tour_feedback"

    with connection.cursor() as cursor:
        columns = {
            column.name for column in connection.introspection.get_table_description(cursor, table_name)
        }

    if "email" in columns:
        return

    if "mobile_number" in columns:
        schema_editor.execute(
            "ALTER TABLE {table} RENAME COLUMN {old} TO {new}".format(
                table=schema_editor.quote_name(table_name),
                old=schema_editor.quote_name("mobile_number"),
                new=schema_editor.quote_name("email"),
            )
        )
        return

    Feedback = apps.get_model("tour", "Feedback")
    field = Feedback._meta.get_field("email")
    field.set_attributes_from_name("email")
    schema_editor.add_field(Feedback, field)


class Migration(migrations.Migration):
    dependencies = [
        ("tour", "0005_rename_mobile_number_feedback_email"),
    ]

    operations = [
        migrations.RunPython(ensure_email_field, migrations.RunPython.noop),
    ]
