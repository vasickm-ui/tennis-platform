using Confluent.Kafka;

namespace NotificationService.Services;

public class KafkaConsumerService : BackgroundService
{
    private readonly ConsumerConfig _config;

    public KafkaConsumerService()
    {
        _config = new ConsumerConfig
        {
            BootstrapServers = "localhost:9092",
            GroupId = "notification-service",
            AutoOffsetReset = AutoOffsetReset.Earliest
        };
    }

    protected override Task ExecuteAsync(CancellationToken stoppingToken)
    {
        using var consumer =
            new ConsumerBuilder<Ignore, string>(_config).Build();

        consumer.Subscribe("user-events");

        while (!stoppingToken.IsCancellationRequested)
        {
            var result = consumer.Consume(stoppingToken);

            Console.WriteLine(
                $"Received message: {result.Message.Value}");
        }

        consumer.Close();

        return Task.CompletedTask;
    }
}