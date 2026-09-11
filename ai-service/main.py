from euroleague_api.game_stats import GameStats
import io

game_stats = GameStats(competition="E")
games = game_stats.get_game_report_single_season(season=2025)

print("Shape: ", games.shape)
print("Type: ", type(games))

print("\nColumns and data types: ")
print(games.dtypes)

ram_mb = games.memory_usage(deep=True).sum() / (1024**2)
print(f"RAM memory consumption of df: {ram_mb:.2f} MB")
print("\n")

csv_buffer = io.StringIO()
games.to_csv(csv_buffer, index=False)
size_bytes = len(csv_buffer.getvalue().encode("utf-8"))
size_mb = size_bytes / (1024**2)
print(f"CSV size: {size_mb:.2f} MB")
