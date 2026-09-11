using NotificationService.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHostedService<KafkaConsumerService>();

var app = builder.Build();

app.Run();