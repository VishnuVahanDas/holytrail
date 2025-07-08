from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase
from blog.models import Blog, Category

class BlogModelTest(TestCase):
    def test_blog_creation(self):
        category = Category.objects.create(name="Test Category")
        image_content = (
            b"\x47\x49\x46\x38\x39\x61\x01\x00\x01\x00\x00\xff\x00,\x00\x00\x00"
            b"\x00\x01\x00\x01\x00\x00\x02\x02L\x01\x00;"
        )
        image = SimpleUploadedFile("test.gif", image_content, content_type="image/gif")
        blog = Blog.objects.create(
            title="Test Blog",
            slug="test-blog",
            image=image,
            content="Test content",
            category=category,
            author="Tester",
        )

        self.assertEqual(Blog.objects.count(), 1)
        self.assertEqual(blog.title, "Test Blog")
