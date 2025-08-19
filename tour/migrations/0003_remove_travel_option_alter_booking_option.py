from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tour', '0002_order'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='travel_option',
        ),
        migrations.AlterField(
            model_name='order',
            name='booking_option',
            field=models.CharField(
                choices=[('economy', 'Economy'), ('delux', 'Delux'), ('premium', 'Premium')],
                max_length=20,
            ),
        ),
    ]
