from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("tour", "0006_ensure_email_field"),
    ]

    operations = [
        migrations.AddField(
            model_name="feedback",
            name="yatra",
            field=models.CharField(
                choices=[
                    ("vrindavan", "Vrindavan"),
                    ("dwarika", "Dwarika"),
                    ("jagannath_puri", "Jagannath Puri"),
                    ("mayapur", "Mayapur"),
                    ("barsana", "Barsana"),
                ],
                default="vrindavan",
                max_length=50,
            ),
        ),
    ]
