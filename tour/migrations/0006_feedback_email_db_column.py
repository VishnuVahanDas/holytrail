from django.db import migrations, models


def rename_email_column_to_mobile_number(apps, schema_editor):
    Feedback = apps.get_model("tour", "Feedback")
    table_name = Feedback._meta.db_table
    connection = schema_editor.connection

    with connection.cursor() as cursor:
        existing_columns = {
            column.name for column in connection.introspection.get_table_description(cursor, table_name)
        }

    email_column = "email"
    mobile_column = "mobile_number"

    if email_column in existing_columns and mobile_column not in existing_columns:
        quoted_table = schema_editor.quote_name(table_name)
        quoted_email = schema_editor.quote_name(email_column)
        quoted_mobile = schema_editor.quote_name(mobile_column)
        schema_editor.execute(
            f"ALTER TABLE {quoted_table} RENAME COLUMN {quoted_email} TO {quoted_mobile};"
        )


class Migration(migrations.Migration):

    dependencies = [
        ("tour", "0005_rename_mobile_number_feedback_email"),
    ]

    operations = [
        migrations.RunPython(
            rename_email_column_to_mobile_number,
            migrations.RunPython.noop,
        ),
        migrations.AlterField(
            model_name="feedback",
            name="email",
            field=models.EmailField(db_column="mobile_number", max_length=254),
        ),
    ]
